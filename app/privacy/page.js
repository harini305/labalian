import PageIntro from "@/components/PageIntro";
import s from "./privacy.module.css";

export const metadata = {
  title: "Privacy",
  description: "Privacy policy for La Balian Villa and Retreat.",
  robots: { index: false },
};

// Text carried over from the original /privacy/ page, a generic template that the
// owner has not yet reviewed (audit 08 C11). Shown with that status made clear.
const sections = [
  ["Information We Collect", ["We collect information that you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include your name, email address, mailing address, phone number, and payment information."]],
  ["How We Use Your Information", null, ["Process and fulfill your orders", "Send you order confirmations and updates", "Respond to your comments and questions", "Improve our website and services", "Send you marketing communications (with your consent)"]],
  ["Information Sharing", ["We do not sell, trade, or rent your personal information to third parties. We may share your information with service providers who assist us in operating our website and conducting our business, as long as those parties agree to keep this information confidential."]],
  ["Data Security", ["We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."]],
  ["Your Rights", ["You have the right to access, update, or delete your personal information at any time. You may also opt out of receiving marketing communications from us."]],
  ["Cookies", ["We use cookies to enhance your experience on our website. You can choose to disable cookies through your browser settings, though this may affect the functionality of the site."]],
  ["Changes to This Policy", ["We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page."]],
  ["Contact Us", ["If you have any questions about this Privacy Policy, please contact us."]],
];

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        variant="plain"
        title="Privacy policy"
        lead="This privacy policy describes how we collect, use, and protect your personal information when you use our website and services."
      />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className={`container ${s.body}`}>
          <p className="demo-note" role="note">
            <span>
              <strong>Awaiting owner review.</strong> This is the general template text from the original website. It
              will be replaced with a policy approved by La Balian. This demonstration site itself does not collect or
              store personal information.
            </span>
          </p>
          {sections.map(([title, paras, list], i) => (
            <section key={title} className={s.block}>
              <h2 className={s.h2}>
                {i + 1}. {title}
              </h2>
              {paras?.map((p) => <p key={p.slice(0, 20)} className="muted">{p}</p>)}
              {list && (
                <>
                  <p className="muted">We use the information we collect to:</p>
                  <ul>
                    {list.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                </>
              )}
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
