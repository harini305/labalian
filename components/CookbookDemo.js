"use client";

import { useRef, useState } from "react";
import { cookbook } from "@/data/site";
import styles from "./CookbookDemo.module.css";

// Frontend-only shop demonstration: no payment details are requested, no order is
// created, nothing is emailed and no file is delivered. The cart lives in memory only.

const MAX = { "e-book": 1, "magazine-book": 10 };
const money = (n) => "$" + n.toFixed(2);

export default function CookbookDemo() {
  const [qty, setQty] = useState({ "e-book": 1, "magazine-book": 1 });
  const [cart, setCart] = useState({});
  const [status, setStatus] = useState("");
  const [done, setDone] = useState(false);
  const doneRef = useRef(null);

  const lines = cookbook.products.filter((p) => cart[p.id]);
  const subtotal = lines.reduce((sum, p) => sum + p.price * cart[p.id], 0);
  const count = lines.reduce((n, p) => n + cart[p.id], 0);

  function add(p) {
    setDone(false);
    setCart((c) => ({ ...c, [p.id]: Math.min(MAX[p.id], (c[p.id] || 0) + qty[p.id]) }));
    setStatus(`${p.name} added to the demo cart.`);
  }
  function change(id, n) {
    setCart((c) => {
      const next = { ...c, [id]: Math.max(0, Math.min(MAX[id], (c[id] || 0) + n)) };
      if (!next[id]) delete next[id];
      return next;
    });
  }
  function remove(p) {
    setCart((c) => {
      const next = { ...c };
      delete next[p.id];
      return next;
    });
    setStatus(`${p.name} removed from the demo cart.`);
  }
  function checkout() {
    setCart({});
    setDone(true);
    requestAnimationFrame(() => doneRef.current?.focus());
  }

  return (
    <div className={styles.shop}>
      <div className={styles.products}>
        <div className={styles.cards}>
        {cookbook.products.map((p) => (
          <article key={p.id} className={styles.product} aria-labelledby={`p-${p.id}`}>
            <div className={styles.productHead}>
              <h3 id={`p-${p.id}`}>{p.name}</h3>
              <p className={styles.price}>{money(p.price)}</p>
            </div>
            <p className={`muted ${styles.desc}`}>{p.description}</p>
            <div className={styles.buy}>
              {MAX[p.id] > 1 ? (
                <div className={styles.stepper} role="group" aria-label={`Quantity for ${p.name}`}>
                  <button
                    type="button"
                    onClick={() => setQty((q) => ({ ...q, [p.id]: Math.max(1, q[p.id] - 1) }))}
                    disabled={qty[p.id] <= 1}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <output aria-live="polite">{qty[p.id]}</output>
                  <button
                    type="button"
                    onClick={() => setQty((q) => ({ ...q, [p.id]: Math.min(MAX[p.id], q[p.id] + 1) }))}
                    disabled={qty[p.id] >= MAX[p.id]}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              ) : (
                <p className={`small muted ${styles.single}`}>Single download</p>
              )}
              <button
                type="button"
                className="btn"
                onClick={() => add(p)}
                disabled={(cart[p.id] || 0) >= MAX[p.id]}
              >
                {(cart[p.id] || 0) >= MAX[p.id] ? "In demo cart" : "Add to demo cart"}
              </button>
            </div>
          </article>
        ))}
        </div>
        {status && (
          <p className={styles.added} role="status">
            {status} <a href="#demo-cart">View demo cart</a>
          </p>
        )}
        <p className="small muted">
          Prices are shown as on the original shop, which does not state the currency. Shipping terms for the printed
          book were not published.
        </p>
      </div>

      <aside id="demo-cart" className={styles.cart} aria-labelledby="cart-title">
        <h3 id="cart-title" className={styles.cartTitle}>
          Demo cart <span className={styles.badge}>{count}</span>
        </h3>

        <div className={styles.cartBody}>
        <div className={styles.cartMain}>
        {done ? (
          <div className={styles.done} ref={doneRef} tabIndex={-1}>
            <p className={styles.doneTitle}>Demo checkout finished</p>
            <p>
              No order has been placed, no payment has been taken and nothing will be emailed or downloaded. The
              cookbook cannot be bought on this demonstration site.
            </p>
            <button type="button" className={styles.link} onClick={() => setDone(false)}>
              Back to the cart
            </button>
          </div>
        ) : lines.length === 0 ? (
          <p className="small muted">Your demo cart is empty.</p>
        ) : (
          <>
            <ul className={styles.lines}>
              {lines.map((p) => (
                <li key={p.id}>
                  <div className={styles.lineTop}>
                    <span>{p.name}</span>
                    <span>{money(p.price * cart[p.id])}</span>
                  </div>
                  <div className={styles.lineControls}>
                    {MAX[p.id] > 1 && (
                      <span className={styles.stepperSmall} role="group" aria-label={`Quantity in cart for ${p.name}`}>
                        <button type="button" onClick={() => change(p.id, -1)} aria-label="Decrease quantity">
                          −
                        </button>
                        <span>{cart[p.id]}</span>
                        <button
                          type="button"
                          onClick={() => change(p.id, 1)}
                          disabled={cart[p.id] >= MAX[p.id]}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </span>
                    )}
                    <button type="button" className={styles.link} onClick={() => remove(p)}>
                      Remove<span className="sr-only"> {p.name}</span>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
        </div>
        <div className={styles.cartSide}>
          {!done && lines.length > 0 && (
            <>
              <p className={styles.subtotal}>
                <span>Subtotal</span>
                <span>{money(subtotal)}</span>
              </p>
              <button type="button" className={`btn ${styles.checkout}`} onClick={checkout}>
                Finish demo checkout
              </button>
            </>
          )}
          <p className={`demo-note ${styles.note}`} role="note">
            <span>
              <strong>Demonstration only.</strong> No payment details are requested and no purchase can be made.
            </span>
          </p>
        </div>
        </div>
      </aside>
    </div>
  );
}
