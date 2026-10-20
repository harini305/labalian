"""Build web-sized derivatives of the original La Balian assets.

Reads only from docs/source-audit/original-assets/ (never modified) and writes
WebP derivatives to public/images/ plus a dimensions manifest to
data/images.json. Re-run with `npm run images`.
"""
import json
import os
import sys

from PIL import Image, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "docs", "source-audit", "original-assets")
UNUSED = os.path.join(SRC, "media-library-unused")
OUT = os.path.join(ROOT, "public", "images")
MANIFEST = os.path.join(ROOT, "data", "images.json")

PHOTO = [480, 800, 1200]
WIDE = [640, 1024, 1600, 2400]

# slug: (source path, target widths). Widths above the source width are dropped,
# and the source width itself is used as the largest variant when smaller.
IMAGES = {
    # Clean villa and pool photographs (no baked-in logo)
    "villa-pool": ("2017_05_gallery-1.jpg", [480, 900]),
    "villa-shape": ("media-library-unused/2019_11_Villa-Shape.jpg", [480, 900]),
    "dining-terrace": ("media-library-unused/2017_06_Tim5-1024x500.png", [640, 1024]),
    # Area, people and services
    "area-palms": ("2019_11_7.jpg", WIDE),
    "priest": ("2019_11_119.jpg", PHOTO),
    "offering": ("2019_11_120.jpg", PHOTO),
    "staff": ("2019_11_208.jpg", [640, 1024, 1600]),
    "team": ("media-library-unused/2020_09_Team-Photo.jpg", [480, 960]),
    "food-bowl": ("2019_11_89.jpg", PHOTO),
    "breakfast": ("2019_11_27.jpg", PHOTO),
    "bbq": ("2019_11_90.jpg", PHOTO),
    # Activities
    "massage": ("2019_11_37.jpg", PHOTO),
    "surf-sunset": ("2019_11_180.jpg", PHOTO),
    "trekking": ("2019_11_247.jpg", WIDE),
    "yoga-class": ("2019_11_59.jpg", PHOTO),
    "bike": ("2019_11_180-1.jpg", PHOTO),
    "cooking": ("2019_11_2-104.jpg", PHOTO),
    "canang": ("2019_11_231.jpg", PHOTO),
    "dance": ("2019_11_210-1.jpg", PHOTO),
    "water-blessing": ("2019_11_139.jpg", PHOTO),
    "rindik": ("2019_11_229.jpg", PHOTO),
    "shopping": ("2019_11_237-1.jpg", PHOTO),
    "ubud": ("2019_11_256.jpg", PHOTO),
    # Yoga and retreats
    "shala": ("2019_11_56.jpg", WIDE),
    "restorative": ("2019_11_57.jpg", PHOTO),
    "circle": ("2019_11_47.jpg", PHOTO),
    "adjust": ("2019_11_3.jpg", PHOTO),
    # Cookbook
    "cookbook-cover": ("2020_09_Cook-Book1-1.jpg", [480, 960]),
}

GALLERY = [
    "Bathroom-1", "Bathroom-2", "Bedroom-1", "Bedroom-2", "Bedroom-3", "Bedroom-4",
    "Bedroom-5", "Bedroom-6", "Bedroom-7", "Bedroom-8", "Kitchen", "Pool-View-3",
    "Rice-Fields", "Entrance", "Full-Room", "Massage-Hut", "Ganesha", "Day-Beds-2",
    "Living-Room", "Dining-2", "Night-Sky",
]
for name in GALLERY:
    IMAGES["g-" + name.lower()] = ("2019_11_%s.jpg" % name, [480, 900])


def load(path):
    im = Image.open(path)
    im.draft("RGB", (2400, 2400))  # fast JPEG downscale on decode for 6000px originals
    im = ImageOps.exif_transpose(im)
    return im.convert("RGB")


def build_photo(slug, rel, widths):
    im = load(os.path.join(SRC, rel))
    w, h = im.size
    sizes = sorted({min(t, w) for t in widths})
    variants = []
    for tw in sizes:
        th = round(h * tw / w)
        out = im if tw == w else im.resize((tw, th), Image.LANCZOS)
        name = "%s-%d.webp" % (slug, tw)
        # Large full-bleed variants tolerate slightly stronger compression.
        out.save(os.path.join(OUT, name), "WEBP", quality=72 if tw >= 1600 else 78, method=6)
        variants.append({"w": tw, "src": "/images/" + name})
    ratio_h = round(h * sizes[-1] / w)
    return {"width": sizes[-1], "height": ratio_h, "variants": variants, "source": rel}


def build_logo():
    """Crop the emblem (no wordmark) from the 200x200 original logo and make icons."""
    im = Image.open(os.path.join(UNUSED, "2019_11_La_Balian-Logo_01_01.png")).convert("RGBA")
    # Rows 9-126 hold the emblem; the wordmark starts below row 140 (measured).
    emblem = im.crop((0, 0, im.width, 132))
    emblem = emblem.crop(emblem.split()[3].getbbox())
    emblem.save(os.path.join(OUT, "logo-emblem.png"), optimize=True)

    # App icon: emblem centred on white, 64px (downscaled from ~118px source).
    side = max(emblem.size) + 16
    canvas = Image.new("RGBA", (side, side), (255, 255, 255, 255))
    canvas.alpha_composite(emblem, ((side - emblem.width) // 2, (side - emblem.height) // 2))
    canvas.convert("RGB").resize((64, 64), Image.LANCZOS).save(os.path.join(ROOT, "app", "icon.png"))
    return {
        "emblem": {"width": emblem.width, "height": emblem.height, "src": "/images/logo-emblem.png"},
    }


def build_og():
    im = load(os.path.join(UNUSED, "2017_06_Landscape3-1024x500.png"))
    ImageOps.fit(im, (1200, 630), Image.LANCZOS).save(os.path.join(ROOT, "app", "opengraph-image.jpg"), quality=82)


def main():
    # Start from an empty output folder so no stale or unused derivatives ship.
    if os.path.isdir(OUT):
        for n in os.listdir(OUT):
            os.remove(os.path.join(OUT, n))
    os.makedirs(OUT, exist_ok=True)
    os.makedirs(os.path.dirname(MANIFEST), exist_ok=True)
    manifest = {}
    for slug, (rel, widths) in IMAGES.items():
        manifest[slug] = build_photo(slug, rel, widths)
        print("%-18s %s" % (slug, [v["w"] for v in manifest[slug]["variants"]]))
    manifest["_logo"] = build_logo()
    build_og()
    with open(MANIFEST, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=1)
    total = sum(os.path.getsize(os.path.join(OUT, n)) for n in os.listdir(OUT))
    print("written %d files, %.1f MB" % (len(os.listdir(OUT)), total / 1e6))


if __name__ == "__main__":
    sys.exit(main())
