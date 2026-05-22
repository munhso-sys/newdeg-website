import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  Menu,
  MapPin,
  Phone,
  Mail,
  Target,
  Gem,
  Telescope,
  Users,
  GraduationCap,
  ClipboardCheck,
  Workflow,
  Scale,
  PieChart,
  ShieldCheck,
  LineChart,
  AlertTriangle,
  Lock,
  CloudUpload,
  CalendarDays,
  BarChart3,
  Globe2,
  CheckCircle2,
  Activity,
  Database,
  Cpu,
} from "lucide-react";

const services = [
  [Users, "Хөдөлмөрийн зохион байгуулалтын шинжилгээ"],
  [GraduationCap, "Мэргэжлийн болон ур чадварын сургалт, үнэлгээ"],
  [ClipboardCheck, "Ур чадварын шалгалт, үнэлгээ хийх"],
  [Workflow, "Ажилбарын судалгаа, процессийн зураглал"],
  [Scale, "Хөдөлмөрийн нормчлол, оновчлол"],
  [PieChart, "Бизнес загварчлал боловсруулах"],
  [ShieldCheck, "Чанарын удирдлагын тогтолцооны зөвлөгөө"],
  [LineChart, "Уурхайн мэдээллийн системийн динамик загвар"],
  [AlertTriangle, "Үйл ажиллагааны эрсдэлийн үнэлгээ"],
  [Lock, "Кибер аюулгүй байдлын судалгаа"],
  [CloudUpload, "Цахим шилжилтийн судалгаа, зөвлөгөө"],
];

const partners = [
  {
    name: "Барулас Майнинг ХХК",
    logo: "/partners/barulas.png",
  },
  {
    name: "Дулаанхан Хайрхан ХХК",
    logo: "/partners/dulaankhan.png",
  },
  {
    name: "Final Drive Services ХХК",
    logo: "/partners/finaldrive.png",
  },
  {
    name: "Шидэт Ундарга ХХК",
    logo: "/partners/shu.png",
  },
  {
    name: "Хөмөг Майнинг ХХК",
    logo: "/partners/khumug.png",
  },
];

const stats = [
  [CalendarDays, "2021", "Оноос хойш тасралтгүй хөгжиж байна"],
  [Users, "Мэргэшсэн баг", "Инженер, эрдэмтэн, судлаачдын хамтын ажиллагаа"],
  [BarChart3, "Судалгаанд суурилсан", "Өгөгдөлд суурилсан нотолгоотой шийдэл"],
  [Globe2, "Цахим шилжилт", "Орчин үеийн технологийг амжилттай нэвтрүүлнэ"],
];

export default function NewdegHomepage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-950">
      <section className="hidden md:block bg-white/80 border-b border-slate-100 text-xs text-slate-600">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-center gap-8">
          <span className="flex items-center gap-2">
            <MapPin size={14} className="text-teal-700" /> Улаанбаатар, Монгол улс
          </span>
          <span className="flex items-center gap-2">
            <Phone size={14} className="text-teal-700" /> +976 55197901
          </span>
          <span className="flex items-center gap-2">
            <Mail size={14} className="text-teal-700" /> info@newdeg.mn
          </span>
        </div>
      </section>

      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="NEWDEG logo"
              width={58}
              height={58}
              className="w-auto h-auto"
              priority
            />
            <div className="text-2xl font-black tracking-wide text-teal-700">NEWDEG</div>
          </a>

          <nav className="hidden lg:flex items-center gap-9 font-semibold text-sm text-slate-700">
            <a href="#home" className="text-teal-700 border-b-2 border-teal-700 pb-2">
              Нүүр
            </a>
            <a href="#about" className="hover:text-teal-700 transition">
              Бидний тухай
            </a>
            <a href="#services" className="hover:text-teal-700 transition">
              Үйлчилгээ
            </a>
            <a href="#partners" className="hover:text-teal-700 transition">
              Хамтрагчид
            </a>
            <a href="#contact" className="hover:text-teal-700 transition">
              Холбоо барих
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-teal-700/15 transition"
            >
              Холбоо барих
            </a>
            <button className="lg:hidden border border-slate-200 p-3 rounded-xl" aria-label="Open menu">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden bg-white scroll-mt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#008C9522,transparent_35%),linear-gradient(90deg,#ffffff_0%,#ffffff_48%,#e9f1f2_100%)]" />
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-25 bg-[linear-gradient(90deg,#008C95_1px,transparent_1px),linear-gradient(#008C95_1px,transparent_1px)] bg-[size:52px_52px]" />

        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-32 relative grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-teal-50 text-teal-800 px-4 py-2 text-sm font-extrabold mb-7 shadow-sm">
              Судалгаа • Шинжилгээ • Хөгжүүлэлт
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight">
              Дата өгөгдлөөс <span className="text-teal-700">мэдлэгийг</span> бүтээж, ухаалаг шийдвэр гаргалтыг удирдана.
            </h1>
            <p className="mt-7 text-base md:text-lg text-slate-600 leading-8 max-w-xl">
              Уул уурхай, эрчим хүч, дэд бүтцийн салбарт судалгаа, шинжилгээ, дижитал шилжилтийн оновчтой шийдлийг хүргэнэ.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#services"
                className="bg-teal-700 hover:bg-teal-800 text-white px-7 py-4 rounded-xl font-extrabold flex items-center gap-2 shadow-xl shadow-teal-700/20 transition hover:-translate-y-0.5"
              >
                Үйлчилгээ үзэх <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="border border-teal-700 text-teal-800 px-7 py-4 rounded-xl font-extrabold bg-white hover:bg-teal-50 transition"
              >
                Холбоо барих
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 bg-teal-700/10 blur-3xl rounded-full" />
            <div className="relative rounded-[2rem] bg-gradient-to-br from-teal-950 via-teal-800 to-teal-600 min-h-[430px] p-8 text-white shadow-2xl overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,white_1px,transparent_1px),linear-gradient(white_1px,transparent_1px)] bg-[size:42px_42px]" />
              <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-white/10" />
              <div className="absolute -left-20 bottom-0 w-72 h-72 rounded-full bg-cyan-300/10" />

              <div className="relative flex items-center justify-between mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-300" />
                  <div className="w-3 h-3 rounded-full bg-yellow-300" />
                  <div className="w-3 h-3 rounded-full bg-green-300" />
                </div>
                <span className="text-xs text-teal-50/80">NEWDEG Intelligence</span>
              </div>

              <div className="relative grid grid-cols-3 gap-4 mb-8">
                {[Activity, Database, Cpu].map((Icon, i) => (
                  <div key={i} className="rounded-2xl bg-white/10 border border-white/10 p-4 backdrop-blur">
                    <Icon size={28} className="mb-4" />
                    <div className="h-2 rounded-full bg-white/30 mb-2" />
                    <div className="h-2 rounded-full bg-white/15 w-2/3" />
                  </div>
                ))}
              </div>

              <div className="relative mt-auto">
                <BarChart3 size={76} className="mb-6 opacity-95" />
                <h3 className="text-3xl font-black">Mining Intelligence Dashboard</h3>
                <p className="mt-3 text-teal-50 max-w-md leading-7">
                  Процесс, бүтээмж, эрсдэл, хүний нөөцийн дата дээр суурилсан шийдвэрийн орчин.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-7xl mx-auto px-6 py-20 scroll-mt-28">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="font-bold text-teal-700 mb-2">Компанийн үндэс</p>
            <h2 className="text-3xl md:text-4xl font-black text-teal-900">Бидний тухай</h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {[
            [Target, "Зорилго", "Дата өгөгдлөөс мэдлэгийг бүтээж ухаалаг шийдвэр гаргалтыг удирдана."],
            [Gem, "Үнэт зүйл", "Түргэн шуурхай, оновчтой удирдлага."],
            [Telescope, "Алсын хараа", "Хүн төвтэй технологийг бүтээж, мэдлэгийг удирдлага болгох."],
          ].map(([Icon, title, text]: any) => (
            <div key={title as string} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center mb-5">
                <Icon className="text-teal-700" size={34} />
              </div>
              <h3 className="font-black text-xl mb-3">{title}</h3>
              <p className="text-slate-600 leading-7">{text}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-100 shadow-sm grid lg:grid-cols-2 gap-10 items-center overflow-hidden">
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-teal-900 mb-6">Нивдэг ХХК-ийн танилцуулга</h3>
            <ul className="space-y-4 text-slate-700 leading-7">
              {[
                "2021 онд үүсгэн байгуулагдсан",
                "Үйл ажиллагааны чиглэл: Судалгаа, шинжилгээ, хөгжүүлэлт",
                "Салбар: Уул уурхай, эрчим хүч, дэд бүтэц",
                "Салбартаа мэргэшсэн инженер, эрдэмтэн, багш, судлаачдын хамт олон",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="text-teal-700 shrink-0 mt-1" size={20} /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] bg-gradient-to-br from-teal-50 to-slate-100 p-10 min-h-80 flex items-center justify-center relative">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,#008C9533,transparent_55%)]" />
            <Globe2 size={150} className="relative text-teal-700" />
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-20 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="font-bold text-teal-700 mb-2">Шийдлийн хүрээ</p>
            <h2 className="text-3xl md:text-4xl font-black text-teal-900">Бидний үйлчилгээ</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(([Icon, title]: any) => (
              <div key={title as string} className="group rounded-3xl border border-slate-100 bg-slate-50 hover:bg-teal-700 p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition min-h-44 flex flex-col items-center justify-center">
                <Icon className="mx-auto text-teal-700 group-hover:text-white mb-4 transition" size={38} />
                <h3 className="font-extrabold text-sm leading-6 group-hover:text-white transition">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="max-w-7xl mx-auto px-6 py-20 scroll-mt-28">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-bold text-teal-700 mb-2">Экосистем</p>
          <h2 className="text-3xl md:text-4xl font-black text-teal-900">Хамтрагч байгууллагууд</h2>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
          {partners.map((p) => (
            <div key={p.name} className="bg-white rounded-3xl border border-slate-100 p-6 text-center shadow-sm min-h-40 flex flex-col items-center justify-center hover:shadow-xl transition">
              <Image
                src={p.logo}
                alt={p.name}
                width={110}
                height={110}
                className="object-contain h-20 w-auto mb-4"
              />
              <span className="font-black text-slate-700 text-sm leading-6">{p.name}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-slate-500 mt-6">
          Салбар бүрийн мэдлэг, туршлага бидний амжилтыг цогцлооно.
        </p>
      </section>

      <section className="relative bg-gradient-to-br from-teal-950 via-teal-900 to-teal-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,white_1px,transparent_1px),linear-gradient(white_1px,transparent_1px)] bg-[size:54px_54px]" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">Яагаад бид гэж?</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map(([Icon, a, b]: any) => (
              <div key={a as string} className="rounded-3xl bg-white/10 border border-white/10 backdrop-blur p-7">
                <Icon className="mx-auto mb-4" size={42} />
                <h3 className="text-xl font-black mb-2">{a}</h3>
                <p className="text-teal-50 text-sm leading-6">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-6 py-20 scroll-mt-28">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-bold text-teal-700 mb-2">Хамтын ажиллагаа</p>
          <h2 className="text-3xl md:text-4xl font-black text-teal-900">Холбоо барих</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm space-y-6">
            <p className="flex gap-3 leading-7">
              <MapPin className="text-teal-700 shrink-0" /> Баянгол дүүрэг, 19-р хороо, 54-22 тоот, Улаанбаатар, Монгол улс
            </p>
            <p className="flex gap-3">
              <Phone className="text-teal-700 shrink-0" /> +976 55197901
            </p>
            <p className="flex gap-3">
              <Mail className="text-teal-700 shrink-0" /> info@newdeg.mn
            </p>
          </div>
          <form className="lg:col-span-2 bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm grid md:grid-cols-2 gap-4">
            <input className="border border-slate-200 rounded-xl p-4 outline-none focus:ring-2 focus:ring-teal-600/20" placeholder="Нэр" />
            <input className="border border-slate-200 rounded-xl p-4 outline-none focus:ring-2 focus:ring-teal-600/20" placeholder="Байгууллага" />
            <input className="border border-slate-200 rounded-xl p-4 outline-none focus:ring-2 focus:ring-teal-600/20" placeholder="Имэйл хаяг" />
            <input className="border border-slate-200 rounded-xl p-4 outline-none focus:ring-2 focus:ring-teal-600/20" placeholder="Утасны дугаар" />
            <textarea className="md:col-span-2 border border-slate-200 rounded-xl p-4 min-h-32 outline-none focus:ring-2 focus:ring-teal-600/20" placeholder="Мессеж" />
            <button className="md:col-span-2 bg-teal-700 hover:bg-teal-800 text-white rounded-xl p-4 font-black transition">Илгээх</button>
          </form>
        </div>
      </section>

      <footer className="bg-teal-950 text-white py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6 items-center">
          <a href="#home" className="flex items-center gap-3">
            <Image src="/logo.png" alt="NEWDEG logo" width={48} height={48} className="w-auto h-auto brightness-0 invert" />
            <div className="text-2xl font-black">NEWDEG</div>
          </a>
          <p className="text-teal-100 text-sm">© 2024 Нивдэг ХХК. Бүх эрх хуулиар хамгаалагдсан.</p>
        </div>
      </footer>
    </main>
  );
}
