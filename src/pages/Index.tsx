/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const slides = [
  {
    id: 1,
    type: "title",
    label: "01",
    content: {
      title: "Диагностика материалов\nв экстремальных условиях",
      subtitle: "Современные методы неразрушающего контроля",
      author: "Автор: Иванов А.В.",
      institution: "Кафедра материаловедения и технологии материалов",
      year: "2024",
    },
  },
  {
    id: 2,
    type: "relevance",
    label: "02",
    content: {
      title: "Актуальность темы",
      intro:
        "Диагностика материалов в экстремальных условиях является критически важной задачей для обеспечения надёжности и безопасности современных инженерных систем.",
      problems: [
        {
          icon: "Thermometer",
          title: "Высокие температуры",
          text: "Деградация структуры материалов при температурах свыше 1000°C в авиационных и энергетических установках",
        },
        {
          icon: "Zap",
          title: "Радиационное воздействие",
          text: "Накопление радиационных дефектов в конструкционных материалах ядерных реакторов",
        },
        {
          icon: "Gauge",
          title: "Экстремальные давления",
          text: "Усталостные разрушения в нефтегазовом и химическом оборудовании",
        },
        {
          icon: "AlertTriangle",
          title: "Агрессивные среды",
          text: "Коррозионные повреждения в морских и химических производствах",
        },
      ],
    },
  },
  {
    id: 3,
    type: "table",
    label: "03",
    content: {
      title: "Проблемы диагностики в экстремальных условиях",
      headers: ["Проблема", "Условия", "Последствия", "Критичность"],
      rows: [
        ["Высокотемпературная ползучесть", "T > 800°C", "Деформация и разрушение", "Критическая"],
        ["Термическая усталость", "ΔT > 500°C, циклы", "Трещинообразование", "Высокая"],
        ["Радиационное охрупчивание", "Нейтронный поток", "Снижение пластичности", "Критическая"],
        ["Коррозионное растрескивание", "Агрессивная среда + напряжение", "Внезапное разрушение", "Критическая"],
        ["Водородное охрупчивание", "H₂-содержащие среды", "Хрупкое разрушение", "Высокая"],
        ["Эрозионный износ", "Высокоскоростные частицы", "Утончение стенок", "Средняя"],
        ["Окисление и сульфидация", "T > 600°C, агрессивные газы", "Потеря материала", "Высокая"],
      ],
      critColors: {
        Критическая: "bg-red-50 text-red-700",
        Высокая: "bg-amber-50 text-amber-700",
        Средняя: "bg-blue-50 text-blue-700",
      },
    },
  },
  {
    id: 4,
    type: "classification",
    label: "04",
    content: {
      title: "Классификация методов неразрушающего контроля",
      categories: [
        {
          name: "Акустические",
          color: "border-slate-800",
          methods: ["Ультразвуковой контроль", "Акустическая эмиссия", "Резонансный метод", "Импедансный метод"],
        },
        {
          name: "Радиационные",
          color: "border-slate-600",
          methods: ["Рентгенография", "Томография (КТ)", "Гамма-дефектоскопия", "Нейтронная радиография"],
        },
        {
          name: "Тепловые",
          color: "border-slate-400",
          methods: ["Термография (ИК)", "Активная термография", "Тепловые волны", "Жидкие кристаллы"],
        },
        {
          name: "Электромагнитные",
          color: "border-amber-400",
          methods: ["Вихретоковый контроль", "Магнитопорошковый", "Магнитный шум Баркгаузена", "Метод рассеяния потока"],
        },
        {
          name: "Оптические",
          color: "border-blue-400",
          methods: ["Визуальный осмотр", "Спекл-интерферометрия", "Голография", "Эндоскопия"],
        },
        {
          name: "Капиллярные",
          color: "border-green-400",
          methods: ["Люминесцентный", "Цветной (хроматический)", "Электростатический", "Фильтрующихся частиц"],
        },
      ],
    },
  },
  {
    id: 5,
    type: "method-detail",
    label: "05",
    content: {
      title: "Ультразвуковая диагностика",
      subtitle: "Высокотемпературные преобразователи",
      sections: [
        {
          heading: "Принцип работы",
          text: "Метод основан на регистрации отражённых ультразвуковых волн от дефектов и границ раздела фаз. Рабочий диапазон частот: 0.1 — 50 МГц.",
        },
        {
          heading: "Высокотемпературные преобразователи",
          text: "Специальные пьезоэлементы на основе LiNbO₃, GaPO₄ и β-кварца обеспечивают работу до 700°C. Буферные стержни из вольфрама применяются для T > 1000°C.",
        },
        {
          heading: "Ключевые применения",
          text: "Контроль стенок котлов и трубопроводов в работающем состоянии; мониторинг лопаток турбин; диагностика реакторных корпусов.",
        },
      ],
      specs: [
        { label: "Диапазон температур", value: "до 1200°C" },
        { label: "Чувствительность", value: "≥ 1 мм" },
        { label: "Глубина контроля", value: "до 10 м" },
        { label: "Время цикла", value: "< 1 с" },
      ],
    },
  },
  {
    id: 6,
    type: "method-dual",
    label: "06",
    content: {
      title: "Радиационные методы и термография",
      methods: [
        {
          name: "Рентгенография и томография",
          icon: "ScanLine",
          description:
            "Рентгенографический контроль выявляет объёмные дефекты — поры, включения, трещины — с разрешением до 0.1 мм. Компьютерная томография (КТ) обеспечивает 3D-реконструкцию внутренней структуры без разрушения образца.",
          advantages: [
            "Выявление внутренних дефектов",
            "Не требует контакта с объектом",
            "3D-визуализация структуры",
            "Применимо для сложных геометрий",
          ],
          limit: "Ограничение: радиационная безопасность, толщина материала",
        },
        {
          name: "Термография (ИК)",
          icon: "Flame",
          description:
            "Инфракрасная термография регистрирует тепловые аномалии, вызванные дефектами. Активная термография с внешним нагревом позволяет выявлять подповерхностные расслоения и трещины.",
          advantages: [
            "Бесконтактный метод",
            "Высокая производительность",
            "Обнаружение расслоений",
            "Мониторинг в реальном времени",
          ],
          limit: "Ограничение: глубина контроля до 10 мм, эмиссивность",
        },
      ],
    },
  },
  {
    id: 7,
    type: "method-detail",
    label: "07",
    content: {
      title: "Акустическая эмиссия и встроенные сенсоры",
      subtitle: "Системы непрерывного мониторинга",
      sections: [
        {
          heading: "Акустическая эмиссия (АЭ)",
          text: "Регистрация упругих волн, генерируемых при развитии дефектов. Позволяет обнаруживать активные трещины в режиме реального времени при нагрузке или нагреве конструкции.",
        },
        {
          heading: "Оптоволоконные сенсоры FBG",
          text: "Сети датчиков на основе волоконно-брэгговских решёток интегрируются в конструкцию на этапе изготовления. Обеспечивают мониторинг деформаций, температур и АЭ одновременно.",
        },
        {
          heading: "Системы SHM",
          text: "Комплексные системы мониторинга здоровья конструкций объединяют множество сенсорных технологий с алгоритмами машинного обучения для прогнозирования остаточного ресурса.",
        },
      ],
      specs: [
        { label: "Чувствительность АЭ", value: "10⁻¹⁵ Дж" },
        { label: "Частота FBG", value: "до 100 кГц" },
        { label: "Каналов мониторинга", value: "до 10 000" },
        { label: "Точность деформации", value: "± 1 мкм" },
      ],
    },
  },
  {
    id: 8,
    type: "materials-table",
    label: "08",
    content: {
      title: "Современные материалы для экстремальных условий",
      headers: ["Материал", "Класс", "Т макс.", "Применение", "Метод контроля"],
      rows: [
        ["Монокристаллы никелевых суперсплавов", "Металл", "1100°C", "Лопатки турбин", "УЗК, рентген, термография"],
        ["Карбид кремния (SiC/SiC)", "УККМ", "1400°C", "Камеры сгорания", "АЭ, рентгеновская КТ"],
        ["Оксид циркония (ZrO₂)", "Керамика", "2200°C", "Тепловые барьеры", "Термография, АЭ"],
        ["Вольфрамовые сплавы", "Металл", "3000°C", "Ядерный синтез", "Нейтронная радиография"],
        ["Углерод-углеродные КМ", "Углерод", "2500°C", "Аэрокосмос", "УЗК, рентгеновская КТ"],
        ["Жаропрочные стали P91/P92", "Металл", "650°C", "Энергетика", "УЗК, вихревые токи"],
        ["Нитрид кремния (Si₃N₄)", "Керамика", "1500°C", "Подшипники, клапаны", "АЭ, рентгенография"],
        ["Сплавы на основе TiAl", "Интерметаллид", "900°C", "Компрессоры", "УЗК, термография"],
      ],
    },
  },
  {
    id: 9,
    type: "ranges",
    label: "09",
    content: {
      title: "Диапазоны испытаний и исследуемые материалы",
      ranges: [
        {
          category: "Температурный диапазон",
          items: [
            { label: "Криогенные условия", value: "−269°C до −100°C", width: 15, color: "bg-blue-300" },
            { label: "Умеренные температуры", value: "−100°C до +500°C", width: 35, color: "bg-slate-400" },
            { label: "Высокие температуры", value: "+500°C до +1500°C", width: 60, color: "bg-orange-400" },
            { label: "Экстремально высокие", value: "> +1500°C", width: 82, color: "bg-red-500" },
          ],
        },
        {
          category: "Давление испытаний",
          items: [
            { label: "Атмосферное", value: "0.1 МПа", width: 10, color: "bg-green-300" },
            { label: "Среднее давление", value: "до 100 МПа", width: 40, color: "bg-teal-400" },
            { label: "Высокое давление", value: "до 1000 МПа", width: 70, color: "bg-slate-500" },
            { label: "Ударные нагрузки", value: "до 10 000 МПа", width: 95, color: "bg-slate-800" },
          ],
        },
        {
          category: "Виды воздействия",
          items: [
            { label: "Статические нагрузки", value: "постоянная нагрузка", width: 100, color: "bg-slate-300" },
            { label: "Циклические нагрузки", value: "до 10⁹ циклов", width: 85, color: "bg-slate-500" },
            { label: "Ударные нагрузки", value: "скорость > 1000 м/с", width: 60, color: "bg-slate-700" },
            { label: "Радиационное облучение", value: "до 100 dpa", width: 45, color: "bg-amber-600" },
          ],
        },
      ],
    },
  },
  {
    id: 10,
    type: "future",
    label: "10",
    content: {
      title: "Будущие направления исследований",
      directions: [
        {
          icon: "Brain",
          title: "Искусственный интеллект в НК",
          text: "Нейронные сети и машинное обучение для автоматической классификации дефектов и прогнозирования остаточного ресурса.",
          horizon: "2025–2030",
        },
        {
          icon: "Atom",
          title: "Квантовые сенсоры",
          text: "Квантовые магнитометры сверхвысокой чувствительности для обнаружения дефектов суб-микронного масштаба.",
          horizon: "2028–2035",
        },
        {
          icon: "Wifi",
          title: "Беспроводные сенсорные сети",
          text: "Самопитающиеся беспроводные сети датчиков для мониторинга труднодоступных объектов без обслуживания.",
          horizon: "2024–2027",
        },
        {
          icon: "ScanSearch",
          title: "Мультимодальная диагностика",
          text: "Одновременное применение нескольких методов НК с алгоритмами слияния данных для повышения достоверности.",
          horizon: "2024–2028",
        },
        {
          icon: "Cpu",
          title: "Цифровые двойники",
          text: "Интеграция НК с BIM/CAD-моделями для создания цифрового двойника конструкции с историей всех измерений.",
          horizon: "2025–2030",
        },
        {
          icon: "Bot",
          title: "Роботизированный контроль",
          text: "Автономные роботы и дроны для контроля в недоступных и опасных зонах: реакторные корпуса, подводные трубопроводы.",
          horizon: "2024–2026",
        },
      ],
    },
  },
  {
    id: 11,
    type: "industry",
    label: "11",
    content: {
      title: "Значение для промышленности",
      intro: "Развитие методов диагностики материалов напрямую влияет на экономику и безопасность ключевых отраслей.",
      sectors: [
        {
          name: "Авиация и космос",
          icon: "Plane",
          impact: "Снижение аварийности на 40%",
          detail: "Продление ресурса двигателей, контроль лопаток турбин и корпусов реакторов",
        },
        {
          name: "Ядерная энергетика",
          icon: "Zap",
          impact: "Продление ресурса на 20 лет",
          detail: "Мониторинг корпусов реакторов, трубопроводов и топливных элементов",
        },
        {
          name: "Нефтегазовая отрасль",
          icon: "Gauge",
          impact: "Экономия $50 млрд/год",
          detail: "Предотвращение аварийных разливов, диагностика подводных трубопроводов",
        },
        {
          name: "Энергетика",
          icon: "Flame",
          impact: "КПД установок +5%",
          detail: "Контроль котлов, турбин и теплообменников тепловых электростанций",
        },
        {
          name: "Транспортная инфраструктура",
          icon: "ArrowUpDown",
          impact: "Безопасность мостов и тоннелей",
          detail: "Непрерывный мониторинг состояния ответственных несущих конструкций",
        },
        {
          name: "Химическая промышленность",
          icon: "FlaskConical",
          impact: "Снижение аварий на 60%",
          detail: "Диагностика реакторов, сосудов давления и трубопроводных систем",
        },
      ],
    },
  },
  {
    id: 12,
    type: "conclusion",
    label: "12",
    content: {
      title: "Ключевые выводы",
      conclusions: [
        "Неразрушающий контроль является незаменимым инструментом обеспечения надёжности и безопасности конструкций из материалов, работающих в экстремальных условиях",
        "Комплексное применение нескольких методов НК (ультразвук, рентгенография, термография, акустическая эмиссия) значительно повышает достоверность и полноту диагностики",
        "Разработка высокотемпературных преобразователей и встроенных сенсорных систем открывает возможности для непрерывного мониторинга конструкций в условиях эксплуатации",
        "Внедрение методов машинного обучения и цифровых двойников переводит диагностику от периодического контроля к предиктивному техническому обслуживанию",
        "Развитие диагностики материалов имеет прямой экономический эффект: сокращение аварий, продление ресурса оборудования и повышение эффективности производства",
      ],
      tagline: "Диагностика сегодня — безопасность и эффективность промышленности завтра",
    },
  },
];

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const goTo = useCallback(
    (idx: number) => {
      if (animating || idx === current) return;
      setDirection(idx > current ? "next" : "prev");
      setAnimating(true);
      setTimeout(() => {
        setCurrent(idx);
        setAnimating(false);
      }, 260);
    },
    [animating, current]
  );

  const next = useCallback(() => goTo(Math.min(current + 1, slides.length - 1)), [current, goTo]);
  const prev = useCallback(() => goTo(Math.max(current - 1, 0)), [current, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  const slide = slides[current];

  return (
    <div className="min-h-screen bg-white font-ibm flex flex-col select-none overflow-hidden">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="flex items-center justify-between px-8 py-3">
          <div className="text-xs font-mono text-gray-300 tracking-widest uppercase">
            Диагностика материалов
          </div>
          <div className="flex items-center gap-0.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-7 h-6 text-xs font-mono rounded transition-all duration-200 ${
                  i === current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:text-gray-600 hover:bg-gray-50"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <div className="text-xs font-mono text-gray-300">
            {current + 1} / {slides.length}
          </div>
        </div>
        <div className="h-0.5 bg-gray-100">
          <div
            className="h-full bg-gray-900 transition-all duration-500 ease-out"
            style={{ width: `${((current + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center pt-20 pb-20 px-8 min-h-screen">
        <div
          style={{
            transition: "opacity 0.26s ease, transform 0.26s ease",
            opacity: animating ? 0 : 1,
            transform: animating
              ? direction === "next"
                ? "translateX(12px)"
                : "translateX(-12px)"
              : "translateX(0)",
          }}
          className="w-full max-w-5xl"
        >
          {slide.type === "title" && <TitleSlide data={slide.content as any} slideNum={slide.label} />}
          {slide.type === "relevance" && <RelevanceSlide data={slide.content as any} slideNum={slide.label} />}
          {slide.type === "table" && <TableSlide data={slide.content as any} slideNum={slide.label} />}
          {slide.type === "classification" && <ClassificationSlide data={slide.content as any} slideNum={slide.label} />}
          {slide.type === "method-detail" && <MethodDetailSlide data={slide.content as any} slideNum={slide.label} />}
          {slide.type === "method-dual" && <MethodDualSlide data={slide.content as any} slideNum={slide.label} />}
          {slide.type === "materials-table" && <MaterialsTableSlide data={slide.content as any} slideNum={slide.label} />}
          {slide.type === "ranges" && <RangesSlide data={slide.content as any} slideNum={slide.label} />}
          {slide.type === "future" && <FutureSlide data={slide.content as any} slideNum={slide.label} />}
          {slide.type === "industry" && <IndustrySlide data={slide.content as any} slideNum={slide.label} />}
          {slide.type === "conclusion" && <ConclusionSlide data={slide.content as any} slideNum={slide.label} />}
        </div>
      </div>

      {/* Bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-gray-100 px-8 py-4 flex items-center justify-between">
        <button
          onClick={prev}
          disabled={current === 0}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
        >
          <Icon name="ChevronLeft" size={16} />
          Назад
        </button>
        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-gray-900" : "w-1.5 bg-gray-200 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          disabled={current === slides.length - 1}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
        >
          Далее
          <Icon name="ChevronRight" size={16} />
        </button>
      </div>
    </div>
  );
}

/* ─── Shared ─── */
function SlideNum({ num }: { num: string }) {
  return <div className="text-xs font-mono text-gray-300 tracking-widest mb-5">{num}</div>;
}
function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-3xl font-semibold text-gray-900 mb-7 leading-tight">{children}</h2>;
}

/* ─── Slides ─── */
function TitleSlide({ data }: { data: any; slideNum: string }) {
  return (
    <div className="min-h-[68vh] flex flex-col justify-center">
      <div className="border-l-4 border-gray-900 pl-10">
        <div className="text-xs font-mono text-gray-300 tracking-widest uppercase mb-8">
          01 · Научная презентация · {data.year}
        </div>
        <h1 className="text-5xl font-semibold text-gray-900 leading-tight mb-5 whitespace-pre-line">
          {data.title}
        </h1>
        <p className="text-xl text-gray-400 font-light mb-12">{data.subtitle}</p>
        <div className="h-px w-14 bg-gray-200 mb-8" />
        <div className="space-y-1">
          <div className="text-gray-800 font-medium">{data.author}</div>
          <div className="text-sm text-gray-400">{data.institution}</div>
        </div>
      </div>
    </div>
  );
}

function RelevanceSlide({ data, slideNum }: { data: any; slideNum: string }) {
  return (
    <div>
      <SlideNum num={slideNum} />
      <H2>{data.title}</H2>
      <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-3xl">{data.intro}</p>
      <div className="grid grid-cols-2 gap-4">
        {data.problems.map((p: any, i: number) => (
          <div key={i} className="border border-gray-100 rounded-xl p-5 hover:border-gray-200 hover:shadow-sm transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center">
                <Icon name={p.icon} size={15} fallback="AlertCircle" />
              </div>
              <span className="font-semibold text-gray-900 text-sm">{p.title}</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TableSlide({ data, slideNum }: { data: any; slideNum: string }) {
  return (
    <div>
      <SlideNum num={slideNum} />
      <H2>{data.title}</H2>
      <div className="rounded-xl border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50">
              {data.headers.map((h: string, i: number) => (
                <th key={i} className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row: string[], i: number) => (
              <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors last:border-0">
                {row.map((cell, j) => (
                  <td key={j} className="px-4 py-3 text-gray-700">
                    {j === 3 ? (
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${(data.critColors as any)[cell] || ""}`}>
                        {cell}
                      </span>
                    ) : (
                      cell
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ClassificationSlide({ data, slideNum }: { data: any; slideNum: string }) {
  return (
    <div>
      <SlideNum num={slideNum} />
      <H2>{data.title}</H2>
      <div className="grid grid-cols-3 gap-4">
        {data.categories.map((cat: any, i: number) => (
          <div key={i} className={`border-l-2 ${cat.color} pl-4 py-1`}>
            <div className="font-semibold text-gray-900 text-sm mb-3">{cat.name}</div>
            <ul className="space-y-1.5">
              {cat.methods.map((m: string, j: number) => (
                <li key={j} className="text-xs text-gray-500 flex items-start gap-2">
                  <span className="text-gray-200 mt-0.5 flex-shrink-0">—</span>
                  {m}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function MethodDetailSlide({ data, slideNum }: { data: any; slideNum: string }) {
  return (
    <div>
      <SlideNum num={slideNum} />
      <H2>{data.title}</H2>
      {data.subtitle && (
        <p className="text-xs font-mono text-gray-400 mb-8 uppercase tracking-widest">{data.subtitle}</p>
      )}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {data.sections.map((s: any, i: number) => (
          <div key={i}>
            <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">{s.heading}</div>
            <p className="text-sm text-gray-600 leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4 pt-6 border-t border-gray-100">
        {data.specs.map((sp: any, i: number) => (
          <div key={i} className="text-center">
            <div className="text-xl font-semibold text-gray-900 mb-1">{sp.value}</div>
            <div className="text-xs text-gray-400">{sp.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MethodDualSlide({ data, slideNum }: { data: any; slideNum: string }) {
  return (
    <div>
      <SlideNum num={slideNum} />
      <H2>{data.title}</H2>
      <div className="grid grid-cols-2 gap-6">
        {data.methods.map((m: any, i: number) => (
          <div key={i} className="border border-gray-100 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-gray-900 rounded-lg flex items-center justify-center">
                <Icon name={m.icon} size={15} className="text-white" fallback="ScanLine" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">{m.name}</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">{m.description}</p>
            <ul className="space-y-2 mb-4">
              {m.advantages.map((adv: string, j: number) => (
                <li key={j} className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
                  {adv}
                </li>
              ))}
            </ul>
            <div className="text-xs text-gray-400 italic border-t border-gray-50 pt-3">{m.limit}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MaterialsTableSlide({ data, slideNum }: { data: any; slideNum: string }) {
  return (
    <div>
      <SlideNum num={slideNum} />
      <H2>{data.title}</H2>
      <div className="rounded-xl border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50">
              {data.headers.map((h: string, i: number) => (
                <th key={i} className="text-left px-3 py-2.5 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row: string[], i: number) => (
              <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors last:border-0">
                {row.map((cell, j) => (
                  <td key={j} className={`px-3 py-2.5 text-xs ${j === 0 ? "font-medium text-gray-900" : "text-gray-500"}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function RangesSlide({ data, slideNum }: { data: any; slideNum: string }) {
  return (
    <div>
      <SlideNum num={slideNum} />
      <H2>{data.title}</H2>
      <div className="space-y-7">
        {data.ranges.map((range: any, i: number) => (
          <div key={i}>
            <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
              {range.category}
            </div>
            <div className="space-y-2">
              {range.items.map((item: any, j: number) => (
                <div key={j} className="flex items-center gap-4">
                  <div className="w-48 text-xs text-gray-500 text-right flex-shrink-0">{item.label}</div>
                  <div className="flex-1 bg-gray-50 rounded-full h-6 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.color} flex items-center justify-end pr-3`}
                      style={{ width: `${item.width}%`, minWidth: "40px" }}
                    >
                      <span className="text-white text-xs font-mono font-medium whitespace-nowrap">
                        {item.value}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FutureSlide({ data, slideNum }: { data: any; slideNum: string }) {
  return (
    <div>
      <SlideNum num={slideNum} />
      <H2>{data.title}</H2>
      <div className="grid grid-cols-3 gap-4">
        {data.directions.map((d: any, i: number) => (
          <div key={i} className="group border border-gray-100 rounded-xl p-4 hover:border-gray-300 hover:shadow-sm transition-all">
            <div className="flex items-start justify-between mb-3">
              <div className="w-8 h-8 bg-gray-50 group-hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-center">
                <Icon name={d.icon} size={15} fallback="Star" />
              </div>
              <span className="text-xs font-mono text-gray-300">{d.horizon}</span>
            </div>
            <h3 className="font-semibold text-gray-900 text-sm mb-2">{d.title}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{d.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function IndustrySlide({ data, slideNum }: { data: any; slideNum: string }) {
  return (
    <div>
      <SlideNum num={slideNum} />
      <H2>{data.title}</H2>
      <p className="text-gray-500 text-sm mb-7">{data.intro}</p>
      <div className="grid grid-cols-3 gap-4">
        {data.sectors.map((s: any, i: number) => (
          <div key={i} className="border border-gray-100 rounded-xl p-4 hover:border-gray-200 hover:shadow-sm transition-all">
            <div className="flex items-center gap-2 mb-2">
              <Icon name={s.icon} size={14} fallback="Building" className="text-gray-500" />
              <span className="font-semibold text-gray-900 text-sm">{s.name}</span>
            </div>
            <div className="text-sm font-semibold text-gray-800 mb-1.5">{s.impact}</div>
            <p className="text-xs text-gray-400 leading-relaxed">{s.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConclusionSlide({ data, slideNum }: { data: any; slideNum: string }) {
  return (
    <div className="min-h-[68vh] flex flex-col justify-center">
      <SlideNum num={slideNum} />
      <H2>{data.title}</H2>
      <div className="space-y-4 mb-12">
        {data.conclusions.map((c: string, i: number) => (
          <div key={i} className="flex gap-5 items-start">
            <span className="text-xs font-mono text-gray-300 w-5 flex-shrink-0 mt-0.5">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-sm text-gray-700 leading-relaxed">{c}</p>
          </div>
        ))}
      </div>
      <div className="border-l-2 border-gray-900 pl-6">
        <p className="text-base font-medium text-gray-900 italic">{data.tagline}</p>
      </div>
    </div>
  );
}