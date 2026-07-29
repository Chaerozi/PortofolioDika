import Kabinet from "../assets/Organization/Kabinet.jpeg";
import logistic from "../assets/Organization/Logistik.jpeg";
import Lead from "../assets/Organization/Lead_page-0001 (1).jpg";
import visitCompany from "../assets/Organization/VisitCompany.jpg";
import sindi from "../assets/Organization/Sindi.jpeg";
import pengabdian from "../assets/Organization/pengabdian.jpeg";

interface OrgExperience {
  role: string;
  org: string;
  date: string;
  description: string;
  photos: string[];
}

const experiences: OrgExperience[] = [
  {
    role: "Member, Communication and Information Division (Kominfo)",
    org: "UKM Ikatan Mahasiswa Papua (IMMAPA)",
    date: "Jan 2024 - Feb 2025",
    description:
      "Managed organizational communication, social media content, and event documentation for the division.",
    photos: [Kabinet],
  },
  {
    role: "Logistics Staff",
    org: "UKM Ikatan Mahasiswa Papua (IMMAPA)",
    date: "Jul 2024 - Dec 2024",
    description:
      "Handled equipment prep, inventory, vendor coordination, and on-site supervision for org events.",
    photos: [logistic],
  },
  {
    role: "Workshop Lead",
    org: "UKM Ikatan Mahasiswa Papua (IMMAPA)",
    date: "May 2024 - Jun 2024",
    description:
      "Led IMMAPA Workshop II, coordinating the committee, managing event communications, and attracting 50+ external participants.",
    photos: [Lead],
  },
  {
    // TODO: cek tanggal kegiatan IMMAPA Charity, dan tambahkan foto kalau sudah ada
    role: "Cabinet Staff (Kominfo Division)",
    org: "UKM Ikatan Mahasiswa Papua (IMMAPA) - Charity Program",
    date: "Agt - Okt 2024",
    description:
      "Supported the Charity program run by another division as part of the cabinet, helping with communication and documentation needs.",
    photos: [pengabdian], // isi dengan foto charity setelah di-import, misal: [charity]
  },
 {
  role: "Academic Division Staff",
  org: "HMIT",
  date: "Oct 2023 - Des 2023",
  description:
    "Assisted the Head of the Academic Division in organizing a company visit to Trans7, supporting event planning, coordination, and participant management.",
  photos: [visitCompany],
},
  {
    // TODO: cek tanggal kegiatan volunteer testing Sindi
    role: "Volunteer Tester",
    org: "Sindi App",
    date: "2023 - 2024",
    description:
      "Volunteered to test Sindi, a social support platform for people with sensory disabilities (visual, hearing, and speech impairments), providing feedback on accessibility and usability.",
    photos: [sindi],
  },

];

const Organization = () => {
  return (
    <section id="organization" className="py-24 bg-white dark:bg-black transition-colors">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Organizational & Volunteer Experience
        </h2>

        <div className="mt-12 space-y-10">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="flex gap-6 pb-10 border-b border-gray-200 dark:border-gray-800 last:border-0"
            >
              <span className="hidden sm:block w-28 shrink-0 text-sm text-gray-400 pt-1">
                {item.date}
              </span>

              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {item.role}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                  {item.org}
                </p>

                <p className="sm:hidden text-xs text-gray-400 mt-1">
                  {item.date}
                </p>

                <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>

                {item.photos.length > 0 && (
                  <div className="mt-4 flex gap-3 overflow-x-auto">
                    {item.photos.map((photo, i) => (
                      <img
                        key={i}
                        src={photo}
                        alt={item.role + " documentation " + (i + 1)}
                        className="h-28 w-40 shrink-0 object-cover rounded-lg border border-gray-200 dark:border-gray-800"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organization;