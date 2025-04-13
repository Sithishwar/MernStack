import styles from './TAC.module.css';

function TAC() {
  return (
    <>
      <div>
        <h1 className={styles.mainhead}>Terms and Conditions</h1>
        <h5 className={styles.sidehead}>
          Welcome to KosmoCare — The World of Cosmetics. By accessing and using our website, you agree to comply with the following terms and conditions. Please read them carefully before making any purchase.
        </h5>

        <ol className={styles.points}>
          <li>
            <strong>General</strong>
            <ul>
              <li>These Terms and Conditions govern your use of the KosmoCare website and the products we offer.</li>
              <li>We reserve the right to update or modify these terms at any time without prior notice.</li>
            </ul>
          </li>

          <li>
            <strong>Products and Orders</strong>
            <ul>
              <li>All products listed on our website are subject to availability.</li>
              <li>We strive to provide accurate product descriptions, images, and prices, but errors may occasionally occur.</li>
              <li>Prices are subject to change without notice.</li>
            </ul>
          </li>

          <li>
            <strong>Shipping and Delivery</strong>
            <ul>
              <li>Free shipping is available on orders above ₹299.</li>
              <li>We aim to deliver products within the estimated time, but delivery dates are not guaranteed.</li>
              <li>We are not responsible for delays caused by unforeseen circumstances or third-party logistics partners.</li>
            </ul>
          </li>

          <li>
            <strong>Returns and Refunds</strong>
            <ul>
              <li>Our 15-day return policy allows you to return unused and unopened products within 15 days of delivery.</li>
              <li>To initiate a return, please contact our customer support with your order details.</li>
              <li>Refunds will be processed after the returned product passes quality inspection.</li>
            </ul>
          </li>

          <li>
            <strong>Payments</strong>
            <ul>
              <li>We accept payments via secure payment gateways.</li>
              <li>All transactions are processed in INR (Indian Rupees).</li>
              <li>Kosmocare is not responsible for any bank charges or additional fees applied by your payment provider.</li>
            </ul>
          </li>

          <li>
            <strong>Authenticity Guarantee</strong>
            <ul>
              <li>All our products are 100% authentic and sourced directly from trusted brands and suppliers.</li>
            </ul>
          </li>

          <li>
            <strong>User Responsibilities</strong>
            <ul>
              <li>You agree not to misuse the website, upload malicious content, or attempt unauthorized access to our systems.</li>
              <li>We reserve the right to suspend or terminate access if any misuse is detected.</li>
            </ul>
          </li>

          <li>
            <strong>Intellectual Property</strong>
            <ul>
              <li>All content on the site, including text, images, logos, and graphics, is the property of KosmoCare and protected by copyright laws.</li>
              <li>Any unauthorized use of our content is strictly prohibited.</li>
            </ul>
          </li>

          <li>
            <strong>Limitation of Liability</strong>
            <ul>
              <li>KosmoCare is not liable for any indirect, incidental, or consequential damages arising from the use of our products or services.</li>
            </ul>
          </li>

          <li>
            <strong>Governing Law</strong>
            <ul>
              <li>These terms shall be governed and construed in accordance with the laws of India.</li>
              <li>Any disputes shall be subject to the exclusive jurisdiction of the courts of Chennai, Tamil Nadu.</li>
            </ul>
          </li>
        </ol>
      </div>
    </>
  );
}

export default TAC;
