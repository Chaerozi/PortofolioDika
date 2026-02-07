import { useState } from "react";

import Conference from "../assets/images/certificates/Conference.png";
import Jabar from "../assets/images/certificates/jabar.png";
import Toefl from "../assets/images/certificates/Toefl.png";
import Backend from "../assets/images/certificates/Backend.png";
import Frontend from "../assets/images/certificates/Front.png";
import Java from "../assets/images/certificates/Java.png";
import Pelatihan from "../assets/images/certificates/Pelatihan.png";
import Mtcna from "../assets/images/certificates/Mtcna.png";
import Axio from "../assets/images/certificates/axio.png";
import Acp from "../assets/images/certificates/acp.png";
import UjiKompetensi from "../assets/images/certificates/UjiKompetensi.jpg";
import Bnsp from "../assets/images/certificates/bnsp.png";

const certificates = [
  { img: Conference, label: "Conference", type: "International" },
  { img: Jabar, label: "West Java", type: "National" },
  { img: Toefl, label: "TOEFL ITP", type: "International" },
  { img: Backend, label: "Backend", type: "Training" },
  { img: Frontend, label: "Frontend", type: "Training" },
  { img: Java, label: "Java", type: "Training" },
  { img: Pelatihan, label: "Pelatihan", type: "Training" },
  { img: Mtcna, label: "MTCNA", type: "International" },
  { img: Axio, label: "Axioo", type: "Training" },
  { img: Acp, label: "ACP", type: "Training" },
  { img: UjiKompetensi, label: "Competency Test", type: "National" },
  { img: Bnsp, label: "BNSP", type: "National" },
];

const badgeStyle = {
  International: "bg-black text-white",
  National: "bg-gray-800 text-white",
  Training: "bg-gray-200 text-gray-800",
};

const Certificates = () => {
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <section
      id="certifications"
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* LEFT SOFT ACCENT */}
      <div className="absolute -top-40 -left-40 w-[380px] h-[380px] bg-gray-200 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-6xl ml-auto lg:mr-16">

          <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
            Certifications
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            Certifications & Language
          </h2>

          <div className="mt-4 w-14 h-[2px] bg-gray-900" />

          {/* GRID */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {certificates.map((item, index) => (
              <button
                key={index}
                onClick={() => setPreview(item.img)}
                className="group relative bg-white border border-gray-200
                           rounded-2xl p-3 text-left
                           hover:shadow-xl transition-all duration-300"
              >
                {/* BADGE */}
                <span
                  className={`absolute top-3 left-3 text-xs px-2 py-1 rounded-full
                              ${badgeStyle[item.type as keyof typeof badgeStyle]}`}
                >
                  {item.type}
                </span>

                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-52 sm:h-56 object-contain
                             transition-transform duration-300
                             group-hover:scale-[1.04]"
                />
              </button>
            ))}
          </div>

          {/* LANGUAGE (RIGHT SIDE FILLED) */}
          <div className="mt-24 max-w-3xl ml-auto">
            <h3 className="text-lg font-semibold text-gray-900">
              Language
            </h3>

            <ul className="mt-6 space-y-4 text-gray-600">
              <li>
                <span className="font-medium text-gray-800">
                  Bahasa Indonesia
                </span>{" "}
                — Native
              </li>
              <li>
                <span className="font-medium text-gray-800">
                  English
                </span>{" "}
                — TOEFL ITP 547
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* MODAL PREVIEW */}
      {preview && (
        <div
          onClick={() => setPreview(null)}
          className="fixed inset-0 z-50 bg-black/70
                     flex items-center justify-center p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl p-4 max-w-4xl w-full"
          >
            <img
              src={preview}
              alt="Certificate Preview"
              className="w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
