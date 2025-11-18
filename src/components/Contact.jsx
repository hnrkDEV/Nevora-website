import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { t } = useLanguage();
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_7bhxbfj",
        "template_tatd9xq",
        form.current,
        "zy9f2zG928YTuhczt"
      )
      .then(
        () => {
          setStatus("success");
          toast.success(t("contact.form.success"), {
            style: {
              background: "#0e1113",
              color: "#eaeaea",
              border: "1px solid #00bfa6",
              borderRadius: "10px",
            },
          });
          form.current.reset();
          setTimeout(() => {
            setStatus("");
          }, 2000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("error");
          setTimeout(() => {
            setStatus("");
          }, 2000);
        }
      );
  };

  return (
    <section id="contact" className="w-full px-6 md:px-20 py-32 text-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-light leading-snug"
          >
            {t("contact.title")}{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00fff0] to-[#00bfa6]">
              {t("contact.highlight")}
            </span>
          </motion.h2>

          <p className="text-gray-400 leading-relaxed max-w-md">
            {t("contact.subtitle")}
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-2">
            <a
              href="https://instagram.com/nevora.dev/"
              target="_blank"
              className="text-gray-400 hover:text-[#00fff0] text-2xl transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/nevora-lab/"
              target="_blank"
              className="text-gray-400 hover:text-[#00fff0] text-2xl transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:business@nevoralabs.com?subject=Contato%20-%20Nevora&body=Ol%C3%A1,%20tenho%20interesse%20em%20um%20projeto."
              className="text-gray-400 hover:text-[#00fff0] text-2xl transition"
              target="_blank"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/5511950187114"
            target="_blank"
            className="flex items-center gap-3 w-fit mt-4 
                       bg-[#00bfa6]/20 border border-[#00bfa6]/30 backdrop-blur-lg 
                       text-[#00fff0] px-6 py-3 rounded-full hover:bg-[#00bfa6]/30 
                       transition shadow-lg shadow-[#00fff0]/5"
          >
            <FaWhatsapp className="text-2xl" />
            {t("contact.whatsapp")}
          </a>
        </div>

        {/* FORM */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 
                     rounded-3xl p-10 flex flex-col gap-6 shadow-xl"
        >
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm">
              {t("contact.form.nameLabel")}
            </label>
            <input
              type="text"
              name="name"
              required
              className="bg-white/5 border border-white/20 rounded-xl p-3 
                         text-gray-100 focus:outline-none focus:border-[#00fff0]
                         transition placeholder:text-gray-500 placeholder:italic"
              placeholder={t("contact.form.namePlaceholder")}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm">
              {t("contact.form.emailLabel")}
            </label>
            <input
              type="email"
              name="email"
              required
              className="bg-white/5 border border-white/20 rounded-xl p-3 
                         text-gray-100 focus:outline-none focus:border-[#00bfa6]
                         transition placeholder:text-gray-500 placeholder:italic"
              placeholder={t("contact.form.emailPlaceholder")}
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm">
              {t("contact.form.messageLabel")}
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="bg-white/5 border border-white/20 rounded-xl p-3 
                         text-gray-100 focus:outline-none focus:border-[#00fff0]
                         transition resize-none placeholder:text-gray-500 placeholder:italic"
              placeholder={t("contact.form.messagePlaceholder")}
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-4 bg-linear-to-r from-[#00fff0] to-[#00bfa6] 
                       text-gray-900 font-semibold rounded-full px-6 py-3 
                       hover:opacity-90 transition shadow-xl hover:cursor-pointer"
          >
            {status === "sending"
              ? t("contact.form.sending")
              : status === "success"
              ? t("contact.form.success")
              : status === "error"
              ? t("contact.form.error")
              : t("contact.form.submit")}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
