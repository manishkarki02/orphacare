import transporter from "@/config/mail.config";
import Environment from "@/config/env.config";

export const sendMail = async (email: string, childName: string) => {
  try {
    let info = await transporter.sendMail({
      from: Environment.get("SMTP_FROM"),
      to: email,
      subject: "Adoption of a child",
      html: `
        <div
          class="container"
          style="max-width: 90%; margin: auto; padding-top: 20px"
        >
          <h2>Welcome from orphacare.</h2>
          <h4>You are officially In ✔</h4>
          <p style="margin-bottom: 30px;">We have received your adoption request of ${childName}. Please visit orphacare center.</p>

     </div>
      `,
    });
    return info;
  } catch (error) {
    console.log(error);
    return false;
  }
};
