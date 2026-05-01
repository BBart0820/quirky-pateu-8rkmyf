// @ts-nocheck
import React, { useState, useEffect, useRef } from "react";
import {
  Home,
  Wind,
  Smile,
  Headphones,
  Sparkles,
  Play,
  Square,
  Volume2,
  VolumeX,
  BookOpen,
  Calendar,
  Activity,
  Plus,
  ChevronLeft,
  ChevronDown,
  ArrowDown,
  Moon,
  CheckCircle2,
  Circle,
  Radio,
  CloudRain,
  Waves,
} from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  // Inject Tailwind CSS so the design works perfectly in any basic Sandbox
  useEffect(() => {
    if (!document.getElementById("tailwind-cdn")) {
      const script = document.createElement("script");
      script.id = "tailwind-cdn";
      script.src = "https://cdn.tailwindcss.com";
      document.head.appendChild(script);
    }
  }, []);

  // Warm Haven Custom Logo Colors
  const theme = {
    bg: "bg-[#F8FAFC]",
    primary: "text-[#4A6D5E]",
    primaryBg: "bg-[#9DC5B4]",
    primaryHover: "hover:bg-[#7FA998]",
    surface: "bg-white",
    border: "border-[#9DC5B4]/30",
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Quicksand:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .font-logo { font-family: 'Montserrat', sans-serif; }
        .font-app { font-family: 'Quicksand', sans-serif; }
        
        /* Custom scrollbar for meditation list */
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `,
        }}
      />

      <div
        className={`min-h-screen ${theme.bg} font-app text-slate-800 pb-20 md:pb-0 md:pl-20 flex flex-col md:flex-row`}
      >
        {/* Mobile Bottom Navigation / Desktop Side Navigation */}
        <nav
          className={`fixed bottom-0 left-0 w-full md:w-20 md:h-full bg-white border-t md:border-t-0 md:border-r ${theme.border} flex md:flex-col justify-around md:justify-center items-center py-2 md:py-8 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] overflow-x-auto hide-scrollbar`}
        >
          <NavItem
            icon={<Home />}
            label="Home"
            isActive={activeTab === "home"}
            onClick={() => setActiveTab("home")}
            theme={theme}
          />
          <NavItem
            icon={<Radio />}
            label="Podcasts"
            isActive={activeTab === "podcasts"}
            onClick={() => setActiveTab("podcasts")}
            theme={theme}
          />
          <NavItem
            icon={<Smile />}
            label="Mood"
            isActive={activeTab === "mood"}
            onClick={() => setActiveTab("mood")}
            theme={theme}
          />
          <NavItem
            icon={<Activity />}
            label="Scales"
            isActive={activeTab === "scales"}
            onClick={() => setActiveTab("scales")}
            theme={theme}
          />
          <NavItem
            icon={<Headphones />}
            label="Sounds"
            isActive={activeTab === "sounds"}
            onClick={() => setActiveTab("sounds")}
            theme={theme}
          />
          <NavItem
            icon={<Sparkles />}
            label="Sensory"
            isActive={activeTab === "sensory"}
            onClick={() => setActiveTab("sensory")}
            theme={theme}
          />
          <NavItem
            icon={<Moon />}
            label="Sleep"
            isActive={activeTab === "sleep"}
            onClick={() => setActiveTab("sleep")}
            theme={theme}
          />
          <NavItem
            icon={<Wind />}
            label="Breathe"
            isActive={activeTab === "breathe"}
            onClick={() => setActiveTab("breathe")}
            theme={theme}
          />
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 max-w-2xl mx-auto w-full p-4 md:p-8 overflow-y-auto">
          <header className="mb-8 text-center md:text-left mt-4 md:mt-0">
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-5xl md:text-6xl font-logo tracking-tight text-slate-900 pt-2">
                Warm Haven
              </h1>
              <h2 className="text-lg md:text-xl tracking-[0.25em] text-slate-800 mt-1 uppercase font-semibold">
                Wellness
              </h2>
              <p className="text-[#4A6D5E] text-[9px] md:text-[10px] font-bold tracking-[0.2em] mt-3 uppercase">
                Where trauma meets healing
              </p>
            </div>
          </header>

          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {activeTab === "home" && (
              <HomeView setActiveTab={setActiveTab} theme={theme} />
            )}
            {activeTab === "podcasts" && <PodcastsView theme={theme} />}
            {activeTab === "mood" && <MoodView theme={theme} />}
            {activeTab === "scales" && <ScalesView theme={theme} />}
            {activeTab === "sounds" && <SoundsView theme={theme} />}
            {activeTab === "sensory" && <SensoryView theme={theme} />}
            {activeTab === "sleep" && <SleepView theme={theme} />}
            {activeTab === "breathe" && <BreatheView theme={theme} />}
          </div>
        </main>
      </div>
    </>
  );
}

// --- Navigation Item ---
function NavItem({ icon, label, isActive, onClick, theme }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center flex-shrink-0 w-[18%] md:flex-none md:w-16 h-14 md:h-20 rounded-xl transition-all duration-300 mx-0.5 md:mx-0 md:my-1 ${
        isActive
          ? `${theme.primary} bg-[#9DC5B4]/20`
          : "text-slate-400 hover:text-[#4A6D5E] hover:bg-slate-50"
      }`}
    >
      <div
        className={`mb-1 transition-transform duration-300 ${
          isActive ? "scale-110" : "scale-100"
        }`}
      >
        {icon}
      </div>
      <span className="text-[10px] font-medium tracking-wide truncate w-full text-center px-1">
        {label}
      </span>
    </button>
  );
}

// --- 1. Home View ---
function HomeView({ setActiveTab, theme }) {
  return (
    <div className="space-y-6">
      <div
        className={`${theme.surface} p-6 rounded-2xl shadow-sm border ${theme.border}`}
      >
        <h2 className="text-xl font-medium mb-2">Welcome back.</h2>
        <p className="text-slate-600 mb-6">
          Take a moment for yourself today. What would you like to focus on?
        </p>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setActiveTab("breathe")}
            className="p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors text-left flex flex-col group"
          >
            <Wind
              className="text-[#99BDE0] mb-2 group-hover:scale-110 transition-transform"
              size={28}
            />
            <span className="font-medium text-slate-800">Deep Breathing</span>
            <span className="text-xs text-slate-500 mt-1">
              Regulate your nervous system
            </span>
          </button>
          <button
            onClick={() => setActiveTab("sensory")}
            className="p-4 rounded-xl bg-[#9DC5B4]/10 hover:bg-[#9DC5B4]/20 transition-colors text-left flex flex-col group"
          >
            <Sparkles
              className="text-[#9DC5B4] mb-2 group-hover:scale-110 transition-transform"
              size={28}
            />
            <span className="font-medium text-slate-800">
              Sensory Grounding
            </span>
            <span className="text-xs text-slate-500 mt-1">
              Soothe an anxious mind
            </span>
          </button>
        </div>
      </div>

      <div
        className={`${theme.surface} p-6 rounded-2xl shadow-sm border ${theme.border} flex items-center justify-between`}
      >
        <div>
          <h3 className="font-medium text-slate-800">Daily Mood Check-in</h3>
          <p className="text-sm text-slate-500">
            How are you feeling right now?
          </p>
        </div>
        <button
          onClick={() => setActiveTab("mood")}
          className={`${theme.primaryBg} ${theme.primaryHover} text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors`}
        >
          Log Mood
        </button>
      </div>
    </div>
  );
}

// --- 2. Breathe View (Box Breathing) ---
function BreatheView({ theme }) {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState("Ready");
  const [timeLeft, setTimeLeft] = useState(4);
  const intervalRef = useRef(null);

  const startBreathing = () => {
    setIsActive(true);
    setPhase("Inhale");
    setTimeLeft(4);
  };

  const stopBreathing = () => {
    setIsActive(false);
    setPhase("Ready");
    setTimeLeft(4);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (!isActive) return;

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 1) return prev - 1;

        // Progress to next phase when timer hits 0
        setPhase((currentPhase) => {
          switch (currentPhase) {
            case "Inhale":
              return "Hold";
            case "Hold":
              return "Exhale";
            case "Exhale":
              return "Hold (Empty)";
            case "Hold (Empty)":
              return "Inhale";
            default:
              return "Inhale";
          }
        });
        return 4; // Reset timer for next phase (4-4-4-4 method)
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [isActive]);

  let scaleClass = "scale-100";
  if (isActive) {
    if (phase === "Inhale") scaleClass = "scale-150";
    else if (phase === "Hold") scaleClass = "scale-150";
    else if (phase === "Exhale") scaleClass = "scale-100";
    else if (phase === "Hold (Empty)") scaleClass = "scale-100";
  }

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-[60vh] ${theme.surface} rounded-3xl p-8 shadow-sm border ${theme.border}`}
    >
      <h2 className="text-2xl font-light mb-2 text-slate-800">Box Breathing</h2>
      <p className="text-slate-500 mb-12 text-center max-w-sm">
        A simple technique to slow your breathing, calm your mind, and reduce
        stress.
      </p>

      <div className="relative w-48 h-48 flex items-center justify-center mb-16">
        <div
          className={`absolute inset-0 bg-[#99BDE0] rounded-full opacity-40 transition-transform duration-[4000ms] ease-in-out ${scaleClass}`}
        ></div>
        <div
          className={`absolute inset-4 bg-[#9DC5B4] rounded-full opacity-40 transition-transform duration-[4000ms] ease-in-out delay-75 ${scaleClass}`}
        ></div>

        <div className="absolute inset-8 bg-[#4A6D5E] rounded-full flex flex-col items-center justify-center text-white z-10 shadow-lg">
          <span className="text-xl font-medium tracking-wider">{phase}</span>
          {isActive && (
            <span className="text-3xl font-light mt-1">{timeLeft}</span>
          )}
        </div>
      </div>

      <button
        onClick={isActive ? stopBreathing : startBreathing}
        className={`flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium transition-all hover:scale-105 active:scale-95 shadow-md ${
          isActive
            ? "bg-rose-500 hover:bg-rose-600"
            : `${theme.primaryBg} ${theme.primaryHover}`
        }`}
      >
        {isActive ? (
          <Square size={20} fill="currentColor" />
        ) : (
          <Play size={20} fill="currentColor" />
        )}
        {isActive ? "Stop Exercise" : "Begin Exercise"}
      </button>
    </div>
  );
}

// --- 3. Mood Tracker View ---
function MoodView({ theme }) {
  const [moods, setMoods] = useState([
    {
      id: 1,
      date: new Date(Date.now() - 86400000).toLocaleString(),
      emoji: "😌",
      text: "Calm",
      note: "Had a good walk today.",
    },
  ]);
  const [selectedMood, setSelectedMood] = useState(null);
  const [note, setNote] = useState("");

  const moodOptions = [
    { emoji: "😢", label: "Sad", color: "bg-[#99BDE0]/30 text-slate-800" },
    { emoji: "😟", label: "Anxious", color: "bg-slate-200 text-slate-800" },
    { emoji: "😐", label: "Neutral", color: "bg-slate-100 text-slate-700" },
    { emoji: "😌", label: "Calm", color: "bg-[#9DC5B4]/40 text-slate-800" },
    { emoji: "😄", label: "Happy", color: "bg-amber-100 text-amber-700" },
  ];

  const handleSave = () => {
    if (!selectedMood) return;
    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      emoji: selectedMood.emoji,
      text: selectedMood.label,
      note: note,
    };
    setMoods([newEntry, ...moods]);
    setSelectedMood(null);
    setNote("");
  };

  return (
    <div className="space-y-6">
      <div
        className={`${theme.surface} p-6 rounded-2xl shadow-sm border ${theme.border}`}
      >
        <h2 className="text-xl font-medium mb-6">How are you feeling?</h2>

        <div className="flex justify-between mb-6">
          {moodOptions.map((mood) => (
            <button
              key={mood.label}
              onClick={() => setSelectedMood(mood)}
              className={`flex flex-col items-center p-2 rounded-xl transition-all ${
                selectedMood?.label === mood.label
                  ? `${mood.color} scale-110 shadow-sm ring-2 ring-offset-2 ring-[#9DC5B4]`
                  : "hover:bg-slate-50 grayscale hover:grayscale-0 opacity-60 hover:opacity-100"
              }`}
            >
              <span className="text-4xl mb-2">{mood.emoji}</span>
              <span className="text-xs font-medium">{mood.label}</span>
            </button>
          ))}
        </div>

        {selectedMood && (
          <div className="animate-in fade-in slide-in-from-top-2">
            <textarea
              className="w-full p-3 border border-slate-200 rounded-xl mb-4 focus:ring-2 focus:ring-[#9DC5B4] focus:outline-none resize-none text-sm"
              rows="3"
              placeholder="Add a note about why you feel this way (optional)..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
            ></textarea>
            <button
              onClick={handleSave}
              className={`w-full py-3 rounded-xl text-white font-medium ${theme.primaryBg} ${theme.primaryHover} transition-colors shadow-sm`}
            >
              Save Entry
            </button>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <h3 className="font-medium text-slate-800 flex items-center gap-2">
          <Calendar size={18} className="text-[#9DC5B4]" /> Recent Entries
        </h3>
        {moods.map((entry) => (
          <div
            key={entry.id}
            className={`${theme.surface} p-4 rounded-xl shadow-sm border ${theme.border} flex items-start gap-4`}
          >
            <div className="text-4xl bg-slate-50 p-2 rounded-xl">
              {entry.emoji}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h4 className="font-medium">{entry.text}</h4>
                <span className="text-xs text-slate-400">{entry.date}</span>
              </div>
              {entry.note && (
                <p className="text-slate-600 text-sm mt-1">{entry.note}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- 4. Custom 1-5 Scales View ---
function ScalesView({ theme }) {
  const [scales, setScales] = useState([
    {
      id: 1,
      name: "Anxiety Tracker",
      levels: {
        1: {
          desc: "Completely calm and relaxed.",
          emotions: "Peaceful, content, safe",
          sensations: "Relaxed muscles, slow breathing",
          action: "",
        },
        2: {
          desc: "Slightly tense, but easily manageable.",
          emotions: "Slight worry, alert",
          sensations: "Slight tension in shoulders, jaw clenched",
          action: "Take 3 deep breaths and do a quick body scan.",
        },
        3: {
          desc: "Heart rate elevated, getting distracted.",
          emotions: "Anxious, overwhelmed, distracted",
          sensations: "Fast heartbeat, shallow breath, butterflies",
          action:
            "Do a 5-minute sensory grounding (5-4-3-2-1) or draw in the Sensory app.",
        },
        4: {
          desc: "Very overwhelmed, need a coping skill.",
          emotions: "Fear, panic, want to escape",
          sensations: "Tight chest, sweating, racing thoughts, shaking",
          action:
            "Use T.I.P.P. skill (splash cold water on face) or the Box Breathing tool.",
        },
        5: {
          desc: "Crisis mode.",
          emotions: "Terror, detachment, out of control",
          sensations: "Can't breathe, numb, dizzy",
          action:
            "Call my support person or dial 988. Put an ice pack on the back of my neck.",
        },
      },
    },
  ]);
  const [mode, setMode] = useState("list");
  const [currentScale, setCurrentScale] = useState(null);

  const emptyLevel = { desc: "", emotions: "", sensations: "", action: "" };
  const [formData, setFormData] = useState({
    name: "",
    levels: {
      1: { ...emptyLevel },
      2: { ...emptyLevel },
      3: { ...emptyLevel },
      4: { ...emptyLevel },
      5: { ...emptyLevel },
    },
  });
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [expandedLevel, setExpandedLevel] = useState(1);

  const handleCreateNew = () => {
    setFormData({
      name: "",
      levels: {
        1: { ...emptyLevel },
        2: { ...emptyLevel },
        3: { ...emptyLevel },
        4: { ...emptyLevel },
        5: { ...emptyLevel },
      },
    });
    setMode("create");
    setExpandedLevel(1);
  };

  const handleSave = () => {
    if (!formData.name) return;
    const newScale = { ...formData, id: Date.now() };
    setScales([newScale, ...scales]);
    setMode("list");
  };

  if (mode === "create") {
    return (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => setMode("list")}
            className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 text-slate-600 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <h2 className="text-xl font-medium text-slate-800">
            Create Custom Scale
          </h2>
        </div>

        <div
          className={`${theme.surface} p-6 rounded-2xl shadow-sm border ${theme.border}`}
        >
          <label className="block text-sm font-medium text-slate-700 mb-2">
            What are you tracking?
          </label>
          <input
            type="text"
            placeholder="e.g., Anger, Depression, Overstimulation"
            className="w-full p-3 border border-slate-200 rounded-xl mb-6 focus:ring-2 focus:ring-[#9DC5B4] focus:outline-none bg-slate-50"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <h3 className="font-medium text-slate-800 mb-4">
            Define your levels (1-5):
          </h3>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <div
                key={num}
                className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm"
              >
                <button
                  onClick={() =>
                    setExpandedLevel(expandedLevel === num ? null : num)
                  }
                  className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white shrink-0 ${
                        num === 1
                          ? "bg-[#9DC5B4]"
                          : num === 2
                          ? "bg-[#8BB5A4]"
                          : num === 3
                          ? "bg-yellow-400"
                          : num === 4
                          ? "bg-orange-400"
                          : "bg-rose-500"
                      }`}
                    >
                      {num}
                    </div>
                    <span className="font-medium text-slate-800">
                      Level {num}
                    </span>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-slate-500 transition-transform ${
                      expandedLevel === num ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedLevel === num && (
                  <div className="p-4 space-y-4 bg-white border-t border-slate-100 animate-in slide-in-from-top-2">
                    <div>
                      <label className="text-xs font-semibold text-slate-500 uppercase">
                        General Description
                      </label>
                      <input
                        type="text"
                        placeholder="What does this feel like overall?"
                        className="w-full p-2 mt-1 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-[#9DC5B4] focus:outline-none bg-slate-50"
                        value={formData.levels[num].desc}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            levels: {
                              ...formData.levels,
                              [num]: {
                                ...formData.levels[num],
                                desc: e.target.value,
                              },
                            },
                          })
                        }
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-semibold text-slate-500 uppercase">
                          Emotions
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., anger, fear, calm"
                          className="w-full p-2 mt-1 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-[#9DC5B4] focus:outline-none bg-slate-50"
                          value={formData.levels[num].emotions}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              levels: {
                                ...formData.levels,
                                [num]: {
                                  ...formData.levels[num],
                                  emotions: e.target.value,
                                },
                              },
                            })
                          }
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-slate-500 uppercase">
                          Sensations
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., tight chest, sweating"
                          className="w-full p-2 mt-1 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-[#9DC5B4] focus:outline-none bg-slate-50"
                          value={formData.levels[num].sensations}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              levels: {
                                ...formData.levels,
                                [num]: {
                                  ...formData.levels[num],
                                  sensations: e.target.value,
                                },
                              },
                            })
                          }
                        />
                      </div>
                    </div>
                    {num > 1 && (
                      <div>
                        <label className="text-xs font-semibold text-[#4A6D5E] uppercase flex items-center gap-1">
                          <ArrowDown size={14} /> Guide to step down to Level{" "}
                          {num - 1}
                        </label>
                        <input
                          type="text"
                          placeholder="Coping skill or action step"
                          className="w-full p-2 mt-1 border border-[#9DC5B4]/50 rounded-lg text-sm focus:ring-2 focus:ring-[#9DC5B4] focus:outline-none bg-[#9DC5B4]/10"
                          value={formData.levels[num].action}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              levels: {
                                ...formData.levels,
                                [num]: {
                                  ...formData.levels[num],
                                  action: e.target.value,
                                },
                              },
                            })
                          }
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={handleSave}
            className={`w-full mt-8 py-3 rounded-xl text-white font-medium ${theme.primaryBg} ${theme.primaryHover} transition-colors shadow-sm`}
          >
            Save Scale
          </button>
        </div>
      </div>
    );
  }

  if (mode === "view" && currentScale) {
    return (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => {
              setMode("list");
              setSelectedLevel(null);
            }}
            className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 text-slate-600 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <h2 className="text-xl font-medium text-slate-800">
            {currentScale.name}
          </h2>
        </div>

        <div
          className={`${theme.surface} p-6 rounded-2xl shadow-sm border ${theme.border}`}
        >
          <p className="text-slate-600 mb-6 text-sm">
            Where are you on this scale right now? Tap a level to check in.
          </p>

          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                onClick={() => setSelectedLevel(num)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all ${
                  selectedLevel === num
                    ? "border-[#9DC5B4] bg-[#9DC5B4]/10 ring-1 ring-[#9DC5B4] shadow-sm"
                    : "border-slate-100 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shrink-0 ${
                    num === 1
                      ? "bg-[#9DC5B4]"
                      : num === 2
                      ? "bg-[#8BB5A4]"
                      : num === 3
                      ? "bg-yellow-400"
                      : num === 4
                      ? "bg-orange-400"
                      : "bg-rose-500"
                  } ${
                    selectedLevel === num
                      ? "scale-110 shadow-md ring-2 ring-white"
                      : ""
                  } transition-all`}
                >
                  {num}
                </div>
                <div className="flex-1">
                  <span className="block text-sm font-bold text-slate-800">
                    Level {num}
                  </span>
                  <span className="block text-sm text-slate-600 mt-1">
                    {currentScale.levels[num].desc || "Not defined"}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {selectedLevel && (
            <div className="mt-6 p-5 bg-slate-50 rounded-xl border border-slate-200 animate-in fade-in zoom-in duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white shrink-0 ${
                    selectedLevel === 1
                      ? "bg-[#9DC5B4]"
                      : selectedLevel === 2
                      ? "bg-[#8BB5A4]"
                      : selectedLevel === 3
                      ? "bg-yellow-400"
                      : selectedLevel === 4
                      ? "bg-orange-400"
                      : "bg-rose-500"
                  }`}
                >
                  {selectedLevel}
                </div>
                <h3 className="font-bold text-slate-800">
                  You are at Level {selectedLevel}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 text-sm">
                <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                  <span className="font-semibold text-slate-700 block mb-1">
                    Emotions
                  </span>
                  <span className="text-slate-600">
                    {currentScale.levels[selectedLevel].emotions ||
                      "None listed"}
                  </span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                  <span className="font-semibold text-slate-700 block mb-1">
                    Sensations
                  </span>
                  <span className="text-slate-600">
                    {currentScale.levels[selectedLevel].sensations ||
                      "None listed"}
                  </span>
                </div>
              </div>

              {selectedLevel > 1 &&
                currentScale.levels[selectedLevel].action && (
                  <div className="bg-[#9DC5B4]/10 p-4 rounded-lg border border-[#9DC5B4]/50">
                    <h4 className="font-semibold text-[#4A6D5E] flex items-center gap-2 mb-2">
                      <ArrowDown size={18} /> Guide to step down to Level{" "}
                      {selectedLevel - 1}
                    </h4>
                    <p className="text-[#2A4235] text-sm">
                      {currentScale.levels[selectedLevel].action}
                    </p>
                  </div>
                )}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div
        className={`${theme.surface} p-6 rounded-2xl shadow-sm border ${theme.border} flex justify-between items-center`}
      >
        <div>
          <h2 className="text-xl font-medium text-slate-800">
            My Custom Scales
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Define what your levels 1-5 look like.
          </p>
        </div>
        <button
          onClick={handleCreateNew}
          className={`p-3 rounded-full text-white ${theme.primaryBg} ${theme.primaryHover} transition-all shadow-sm hover:scale-105`}
        >
          <Plus size={24} />
        </button>
      </div>

      <div className="grid gap-4">
        {scales.map((scale) => (
          <button
            key={scale.id}
            onClick={() => {
              setCurrentScale(scale);
              setMode("view");
            }}
            className={`${theme.surface} p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-[#9DC5B4] transition-all text-left flex items-center justify-between group`}
          >
            <div>
              <h3 className="font-medium text-slate-800 group-hover:text-[#4A6D5E] transition-colors text-lg">
                {scale.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Tap to check in on this scale
              </p>
            </div>
            <Activity className="text-slate-300 group-hover:text-[#9DC5B4] transition-colors" />
          </button>
        ))}
      </div>
    </div>
  );
}

// --- 5. Sounds View ---
function SoundsView({ theme }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const noiseNodeRef = useRef(null);

  const toggleNoise = () => {
    if (isPlaying) {
      if (audioCtxRef.current) {
        audioCtxRef.current.suspend();
      }
      setIsPlaying(false);
    } else {
      if (!audioCtxRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioCtx = new AudioContext();

        const bufferSize = 2 * audioCtx.sampleRate;
        const noiseBuffer = audioCtx.createBuffer(
          1,
          bufferSize,
          audioCtx.sampleRate
        );
        const output = noiseBuffer.getChannelData(0);

        let b0, b1, b2, b3, b4, b5, b6;
        b0 = b1 = b2 = b3 = b4 = b5 = b6 = 0.0;
        for (let i = 0; i < bufferSize; i++) {
          let white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.969 * b2 + white * 0.153852;
          b3 = 0.8665 * b3 + white * 0.3104856;
          b4 = 0.55 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.016898;
          output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
          output[i] *= 0.11;
          b6 = white * 0.115926;
        }

        const noise = audioCtx.createBufferSource();
        noise.buffer = noiseBuffer;
        noise.loop = true;

        const filter = audioCtx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.value = 800;

        noise.connect(filter);
        filter.connect(audioCtx.destination);
        noise.start(0);

        audioCtxRef.current = audioCtx;
        noiseNodeRef.current = noise;
      } else {
        audioCtxRef.current.resume();
      }
      setIsPlaying(true);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
      <div
        className={`${theme.surface} p-6 rounded-2xl shadow-sm border ${theme.border} text-center`}
      >
        <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-4 text-[#9DC5B4]">
          <Headphones size={32} />
        </div>
        <h2 className="text-xl font-medium mb-2">Ambient Focus Noise</h2>
        <p className="text-slate-500 text-sm mb-6 max-w-xs mx-auto">
          A continuous, soft pink noise frequency engineered to mask distracting
          sounds and calm the nervous system.
        </p>
        <button
          onClick={toggleNoise}
          className={`mx-auto flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium transition-colors shadow-md ${
            isPlaying
              ? "bg-slate-800 hover:bg-slate-700"
              : `${theme.primaryBg} ${theme.primaryHover}`
          }`}
        >
          {isPlaying ? <VolumeX size={20} /> : <Volume2 size={20} />}
          {isPlaying ? "Pause Audio" : "Play Audio"}
        </button>
      </div>
    </div>
  );
}

// --- 8. Podcasts View ---
function PodcastsView({ theme }) {
  const podcasts = [
    {
      title: "Ten Percent Happier",
      author: "Dan Harris",
      desc: "Meditation and mental health for skeptics.",
      embedUrl:
        "https://open.spotify.com/embed/show/4iGzKccWkeYnpaD8H3Xyv5?utm_source=generator&theme=0",
    },
    {
      title: "The Huberman Lab",
      author: "Dr. Andrew Huberman",
      desc: "Neuroscience for everyday mental health.",
      embedUrl:
        "https://open.spotify.com/embed/show/79CkJF3UJTHFV8Dse3Oy0P?utm_source=generator&theme=0",
    },
    {
      title: "Therapy Chat",
      author: "Laura Reagan, LCSW-C",
      desc: "Conversations on trauma, mindfulness, and healing.",
      embedUrl:
        "https://open.spotify.com/embed/show/60b6Z2d8PttdM8I1gYtO1J?utm_source=generator&theme=0",
    },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
      <div
        className={`${theme.surface} p-6 rounded-2xl shadow-sm border ${theme.border}`}
      >
        <h3 className="text-xl font-medium text-slate-800 flex items-center gap-2 mb-2">
          <Radio size={24} className="text-[#9DC5B4]" /> Recommended Podcasts
        </h3>
        <p className="text-slate-600 mb-6 text-sm">
          Listen to these curated mental health podcasts directly in the app.
        </p>

        <div className="space-y-4">
          {podcasts.map((pod, idx) => (
            <div
              key={idx}
              className={`bg-slate-50 p-4 rounded-xl shadow-sm border border-slate-100`}
            >
              <div className="mb-3">
                <h4 className="font-medium text-slate-800">{pod.title}</h4>
                <p className="text-xs text-slate-500 font-medium mb-1">
                  by {pod.author}
                </p>
                <p className="text-sm text-slate-600">{pod.desc}</p>
              </div>

              <iframe
                style={{ borderRadius: "12px" }}
                src={pod.embedUrl}
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={`${pod.title} podcast player`}
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- 6. Sensory Grounding View ---
function SensoryView({ theme }) {
  const canvasRef = useRef(null);
  const ripplesRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const animate = () => {
      ctx.fillStyle = "rgba(248, 250, 252, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ripplesRef.current.forEach((ripple, index) => {
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ripple.color}, ${ripple.alpha})`;
        ctx.fill();

        ripple.radius += 1;
        ripple.alpha -= 0.02;

        if (ripple.alpha <= 0) {
          ripplesRef.current.splice(index, 1);
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const addRipple = (x, y) => {
    // Colors mapped to Warm Haven logo (Sage Green, Sky Blue, Dark Green)
    const colors = [
      "157, 197, 180",
      "153, 189, 224",
      "74, 109, 94",
      "180, 210, 195",
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    ripplesRef.current.push({
      x,
      y,
      radius: 10,
      alpha: 0.8,
      color: randomColor,
    });
  };

  const handleMouseMove = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    addRipple(e.clientX - rect.left, e.clientY - rect.top);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    const rect = canvasRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    addRipple(touch.clientX - rect.left, touch.clientY - rect.top);
  };

  return (
    <div
      className={`flex flex-col h-[70vh] ${theme.surface} rounded-3xl p-6 shadow-sm border ${theme.border}`}
    >
      <div className="mb-4">
        <h2 className="text-xl font-medium text-slate-800">Sensory Canvas</h2>
        <p className="text-slate-500 text-sm mb-2">
          Touch or drag across the box below to create calming ripples. Focus
          entirely on the movement and colors.
        </p>
      </div>

      <div className="flex-1 relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-inner">
        <canvas
          ref={canvasRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onTouchStart={handleTouchMove}
          className="absolute inset-0 w-full h-full cursor-crosshair touch-none"
        />
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30">
          <Sparkles size={48} className="text-slate-400" />
        </div>
      </div>
    </div>
  );
}

// --- 7. Sleep View ---
function SleepView({ theme }) {
  const [routine, setRoutine] = useState([
    { id: 1, text: "Dim the lights & cool the room", completed: false },
    { id: 2, text: "Put away screens 30+ mins before bed", completed: false },
    { id: 3, text: "Do a 5-minute deep breathing exercise", completed: false },
    { id: 4, text: "Prepare your sleep environment audio", completed: false },
  ]);

  // --- Guided Meditation State ---
  const [meditationActive, setMeditationActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedMeditation, setSelectedMeditation] = useState(null);
  const [selectedVisual, setSelectedVisual] = useState("stars");

  // --- Audio State ---
  const [activeAudio, setActiveAudio] = useState(null);
  const audioNodesRef = useRef({ ctx: null, source: null, lfo: null });

  const visualOptions = [
    { id: "stars", name: "Night Sky" },
    { id: "aurora", name: "Soft Aurora" },
    { id: "fireflies", name: "Drifting Fireflies" },
    { id: "lotus", name: "Breathing Lotus" },
  ];

  const audioOptions = [
    { id: "ocean", name: "Ocean Waves", icon: <Waves size={24} /> },
    { id: "rain", name: "Gentle Rain", icon: <CloudRain size={24} /> },
    { id: "brown", name: "Deep Brown Noise", icon: <Volume2 size={24} /> },
    { id: "white", name: "White Noise", icon: <Activity size={24} /> },
  ];

  const meditations = [
    {
      id: "body-scan",
      title: "Deep Body Scan",
      duration: "Approx. 2 min",
      steps: [
        "Settle comfortably into your bed.",
        "Take a slow, deep breath in...",
        "And gently let it out.",
        "Bring your awareness to your feet. Notice any tension, and let it go.",
        "Move your focus to your legs. Feel them become heavy and relaxed.",
        "Relax your stomach and chest. Let your breathing be natural.",
        "Release the tension in your shoulders, letting them sink.",
        "Unclench your jaw and soften the muscles in your face.",
        "You are safe, relaxed, and ready for rest.",
        "Sleep well.",
      ],
    },
    {
      id: "letting-go",
      title: "Letting Go of the Day",
      duration: "Approx. 2 min",
      steps: [
        "Take a moment to acknowledge the day has ended.",
        "Breathe in deeply, gathering any lingering thoughts.",
        "Breathe out slowly, letting those thoughts drift away.",
        "There is nothing more you need to do today.",
        "Whatever happened today is now in the past.",
        "Give yourself permission to rest completely.",
        "Focus only on the gentle rhythm of your breath.",
        "Inhale peace...",
        "Exhale stress...",
        "Allow yourself to drift into a deep, restorative sleep.",
      ],
    },
    {
      id: "countdown",
      title: "10 to 1 Deepening Relaxation",
      duration: "Approx. 3 min",
      steps: [
        "Close your eyes and take a deep breath.",
        "We are going to count down to deep rest.",
        "10... feel your body sinking into the mattress.",
        "9... your muscles are softening and letting go.",
        "8... your breathing is becoming slow and rhythmic.",
        "7... your mind is quieting down.",
        "6... all the tension of the day is melting away.",
        "5... you feel incredibly peaceful and calm.",
        "4... drifting slowly downward.",
        "3... almost asleep.",
        "2... perfectly relaxed.",
        "1... deep, restorative sleep.",
      ],
    },
    {
      id: "pmr",
      title: "Progressive Muscle Relaxation",
      duration: "Approx. 4 min",
      steps: [
        "Bring your attention to your toes. Curl them tightly... and release.",
        "Flex your calf muscles... hold it... and completely let go.",
        "Squeeze your thigh muscles... notice the tension... and relax.",
        "Tighten your stomach... hold... and release, letting it soften.",
        "Pull your shoulders up to your ears... hold the tension... and drop them down.",
        "Clench your hands into fists... squeeze... and let your fingers fall open.",
        "Scrunch up your face tightly... hold... and relax every muscle.",
        "Feel the heavy, warm relaxation spreading through your entire body.",
      ],
    },
    {
      id: "forest",
      title: "The Quiet Forest",
      duration: "Approx. 3 min",
      steps: [
        "Imagine yourself walking on a quiet path in a beautiful forest.",
        "The air is cool, crisp, and smells of pine.",
        "Soft moss cushions your every footstep.",
        "A gentle breeze rustles the leaves above you.",
        "You feel completely safe and protected here.",
        "You sit down by a slow-moving, quiet stream.",
        "Watch the water gently carry your worries away.",
        "The forest grows darker as the sun sets.",
        "It is time to rest perfectly undisturbed.",
      ],
    },
    {
      id: "beach",
      title: "Warm Sunset Beach",
      duration: "Approx. 3 min",
      steps: [
        "Imagine walking onto a warm, quiet beach at sunset.",
        "The sand is incredibly soft beneath your feet.",
        "Listen to the rhythmic, gentle sound of the waves.",
        "Inhale as a wave slowly rolls in...",
        "Exhale as the wave softly washes out.",
        "The sky turns beautiful shades of soft pink and purple.",
        "The warmth of the fading sun relaxes your muscles.",
        "You are completely at peace.",
        "Drift off to the sound of the ocean.",
      ],
    },
    {
      id: "gratitude",
      title: "Evening Gratitude",
      duration: "Approx. 2 min",
      steps: [
        "Bring to mind one small, good thing that happened today.",
        "Let that feeling of gratitude fill your chest.",
        "Thank your body for carrying you through the day.",
        "Thank your mind for its hard work.",
        "You have done enough today.",
        "Now, give both your mind and body permission to rest.",
        "Breathe in gratitude.",
        "Breathe out tension.",
        "Rest peacefully.",
      ],
    },
    {
      id: "breathing-478",
      title: "4-7-8 Sleep Breathing",
      duration: "Approx. 3 min",
      steps: [
        "We will breathe in for 4 seconds, hold for 7, and exhale for 8.",
        "Breathe in... 2... 3... 4.",
        "Hold the breath... 3... 4... 5... 6... 7.",
        "Exhale slowly... 3... 4... 5... 6... 7... 8.",
        "Breathe in... 2... 3... 4.",
        "Hold... finding stillness... 5... 6... 7.",
        "Exhale completely... letting go... 6... 7... 8.",
        "Return to normal breathing.",
        "Feel your heart rate slowing down.",
        "Let sleep come naturally.",
      ],
    },
    {
      id: "cabin",
      title: "The Cozy Cabin",
      duration: "Approx. 3 min",
      steps: [
        "You are perfectly safe inside a warm, cozy cabin.",
        "A gentle fire crackles softly in the fireplace.",
        "Outside the window, soft snow is silently falling.",
        "You are wrapped in a heavy, incredibly soft blanket.",
        "The room is filled with a warm, golden glow.",
        "Nothing from the outside world can bother you here.",
        "You feel warm, heavy, and comfortable.",
        "Drift into a deep, cozy sleep.",
      ],
    },
    {
      id: "cloud",
      title: "Floating on a Cloud",
      duration: "Approx. 2 min",
      steps: [
        "Imagine resting on a perfectly soft, white cloud.",
        "It supports your body completely and effortlessly.",
        "You feel incredibly light, almost weightless.",
        "Floating gently in a beautiful twilight sky.",
        "Moving slowly and peacefully with the gentle breeze.",
        "Below you, the world is quiet and still.",
        "Let go of all your weight.",
        "Float away into sleep.",
      ],
    },
    {
      id: "safe-space",
      title: "Your Safe Haven",
      duration: "Approx. 2 min",
      steps: [
        "Bring to mind a place where you feel perfectly safe.",
        "It can be a real place, or an imagined one.",
        "Notice the soothing colors around you.",
        "Notice the perfect, comfortable temperature.",
        "Notice how calm your body feels in this space.",
        "You are completely protected here.",
        "You are loved.",
        "It is entirely safe to let your guard down now.",
        "Sleep peacefully.",
      ],
    },
    {
      id: "stars",
      title: "The Starry Night",
      duration: "Approx. 2 min",
      steps: [
        "Look up at a vast, clear night sky.",
        "Millions of stars are shining quietly, just for you.",
        "The universe is incredibly vast and completely peaceful.",
        "You are a quiet, peaceful part of it.",
        "Let the soft starlight wash over you, relaxing your mind.",
        "There is nothing to worry about under this sky.",
        "Close your eyes.",
        "Rest.",
      ],
    },
  ];

  const toggleTask = (id) => {
    setRoutine(
      routine.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const startMeditation = (meditation) => {
    setSelectedMeditation(meditation);
    setCurrentStep(0);
    setMeditationActive(true);
  };

  const stopMeditation = () => {
    setMeditationActive(false);
    setTimeout(() => setSelectedMeditation(null), 500);
  };

  // Handle Meditation Intervals
  useEffect(() => {
    let interval;
    if (meditationActive && selectedMeditation) {
      interval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev < selectedMeditation.steps.length - 1) {
            return prev + 1;
          } else {
            setMeditationActive(false);
            return 0;
          }
        });
      }, 8000);
    }
    return () => clearInterval(interval);
  }, [meditationActive, selectedMeditation]);

  // Clean up audio on unmount
  useEffect(() => {
    return () => {
      if (audioNodesRef.current.ctx) {
        audioNodesRef.current.ctx.close().catch(() => {});
      }
    };
  }, []);

  const stopAudio = () => {
    if (audioNodesRef.current.source) {
      try {
        audioNodesRef.current.source.stop();
      } catch (e) {}
    }
    if (audioNodesRef.current.lfo) {
      try {
        audioNodesRef.current.lfo.stop();
      } catch (e) {}
    }
    if (audioNodesRef.current.ctx) {
      audioNodesRef.current.ctx.suspend();
    }
    setActiveAudio(null);
  };

  const playAudio = (type) => {
    if (activeAudio) stopAudio();

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();
    const bufferSize = 2 * ctx.sampleRate;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);

    // Generate specific noise type buffer
    if (type === "white") {
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
    } else if (type === "rain") {
      // Pink noise approximation for rain
      let b0 = 0,
        b1 = 0,
        b2 = 0,
        b3 = 0,
        b4 = 0,
        b5 = 0,
        b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        let white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.969 * b2 + white * 0.153852;
        b3 = 0.8665 * b3 + white * 0.3104856;
        b4 = 0.55 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.016898;
        output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
        output[i] *= 0.11;
        b6 = white * 0.115926;
      }
    } else {
      // Brown noise for Ocean / Brown
      let lastOut = 0;
      for (let i = 0; i < bufferSize; i++) {
        let white = Math.random() * 2 - 1;
        output[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = output[i];
        output[i] *= 3.5;
      }
    }

    const source = ctx.createBufferSource();
    source.buffer = noiseBuffer;
    source.loop = true;
    let lfo = null;

    const masterGain = ctx.createGain();

    // Apply specific filters to shape the sound
    if (type === "ocean") {
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 150;

      lfo = ctx.createOscillator();
      lfo.type = "sine";
      lfo.frequency.value = 1 / 8; // 8 second waves

      const lfoGain = ctx.createGain();
      lfoGain.gain.value = 100;

      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);

      masterGain.gain.value = 0.8;
      source.connect(filter);
      filter.connect(masterGain);
      lfo.start(0);
    } else if (type === "rain") {
      const lp = ctx.createBiquadFilter();
      lp.type = "lowpass";
      lp.frequency.value = 1200;
      const hp = ctx.createBiquadFilter();
      hp.type = "highpass";
      hp.frequency.value = 400;

      masterGain.gain.value = 2.0;
      source.connect(lp);
      lp.connect(hp);
      hp.connect(masterGain);
    } else if (type === "brown") {
      const lp = ctx.createBiquadFilter();
      lp.type = "lowpass";
      lp.frequency.value = 400;
      masterGain.gain.value = 1.0;
      source.connect(lp);
      lp.connect(masterGain);
    } else if (type === "white") {
      masterGain.gain.value = 0.04; // Keep white noise very quiet
      source.connect(masterGain);
    }

    masterGain.connect(ctx.destination);
    source.start(0);

    audioNodesRef.current = { ctx, source, lfo };
    setActiveAudio(type);
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
      <div
        className={`${theme.surface} p-6 rounded-2xl shadow-sm border ${theme.border}`}
      >
        <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-4 text-indigo-500">
          <Moon size={32} />
        </div>
        <h2 className="text-xl font-medium mb-2 text-slate-800">
          Evening Wind-Down
        </h2>
        <p className="text-slate-600 mb-6 text-sm">
          Preparing your body and mind for rest is a crucial part of sleep
          hygiene. Check off your wind-down routine as you complete it tonight.
        </p>

        <div className="space-y-3">
          {routine.map((task) => (
            <button
              key={task.id}
              onClick={() => toggleTask(task.id)}
              className={`w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all ${
                task.completed
                  ? "border-indigo-200 bg-indigo-50/50 text-slate-400 line-through"
                  : "border-slate-100 hover:border-slate-300 hover:bg-slate-50 text-slate-700"
              }`}
            >
              {task.completed ? (
                <CheckCircle2 className="text-indigo-500 shrink-0" size={24} />
              ) : (
                <Circle className="text-slate-300 shrink-0" size={24} />
              )}
              <span className="font-medium text-sm">{task.text}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Deep Sleep Audio Environment */}
      <div className="bg-slate-900 p-6 rounded-2xl shadow-lg relative overflow-hidden">
        {/* Background Visuals - Gentle Pulsing Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl transition-opacity duration-1000 ${
              activeAudio ? "animate-pulse opacity-100" : "opacity-40"
            }`}
            style={{ animationDuration: "8s" }}
          ></div>
        </div>

        <div className="relative z-10 py-2">
          <h3 className="text-xl font-medium text-white flex items-center gap-2 mb-2">
            <Volume2 size={20} className="text-indigo-300" /> Deep Sleep Audio
          </h3>
          <p className="text-slate-400 text-sm mb-6">
            Select a continuous, soothing sound environment to mask background
            noise and naturally guide your brainwaves into deep sleep.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-2">
            {audioOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => {
                  if (activeAudio === opt.id) {
                    stopAudio();
                  } else {
                    playAudio(opt.id);
                  }
                }}
                className={`p-4 rounded-xl flex flex-col items-center gap-2 transition-all border ${
                  activeAudio === opt.id
                    ? "bg-indigo-600 border-indigo-400 text-white shadow-[0_0_15px_rgba(79,70,229,0.3)]"
                    : "bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-700"
                }`}
              >
                <div
                  className={`${
                    activeAudio === opt.id
                      ? "animate-pulse text-white"
                      : "text-slate-400"
                  }`}
                >
                  {opt.icon}
                </div>
                <span className="text-xs font-medium text-center">
                  {opt.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Guided Visual Mindfulness */}
      <div
        className={`${theme.surface} p-6 rounded-2xl shadow-sm border ${theme.border}`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
          <h3 className="font-medium text-slate-800 flex items-center gap-2">
            <Sparkles size={18} className="text-[#9DC5B4]" /> Guided Sleep
            Mindfulness
          </h3>

          {!meditationActive && (
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 hide-scrollbar">
              <span className="text-xs text-slate-400 font-medium uppercase tracking-wider shrink-0">
                Visual:
              </span>
              {visualOptions.map((vis) => (
                <button
                  key={vis.id}
                  onClick={() => setSelectedVisual(vis.id)}
                  className={`text-xs px-3 py-1.5 rounded-full whitespace-nowrap transition-colors ${
                    selectedVisual === vis.id
                      ? "bg-[#9DC5B4] text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {vis.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {!meditationActive ? (
          <div className="animate-in fade-in">
            <p className="text-slate-600 mb-4 text-sm">
              Select an exercise to quietly guide you into rest. No audio
              required.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {meditations.map((med) => (
                <button
                  key={med.id}
                  onClick={() => startMeditation(med)}
                  className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-[#9DC5B4]/10 border border-slate-100 hover:border-[#9DC5B4] rounded-xl transition-all group"
                >
                  <div className="text-left pr-4">
                    <h4 className="font-semibold text-slate-800 group-hover:text-[#4A6D5E]">
                      {med.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      {med.duration}
                    </p>
                  </div>
                  <Play
                    size={20}
                    className="text-slate-400 group-hover:text-[#9DC5B4] shrink-0"
                  />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-slate-900 h-80 rounded-xl relative overflow-hidden flex flex-col items-center justify-center p-8 text-center shadow-inner animate-in zoom-in-95 duration-500">
            {/* Dynamic Visualizer Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {selectedVisual === "stars" && (
                <>
                  <div
                    className="absolute top-[15%] left-[25%] w-1 h-1 bg-indigo-100 rounded-full opacity-30 animate-ping"
                    style={{ animationDuration: "4s" }}
                  ></div>
                  <div
                    className="absolute top-[35%] left-[85%] w-1.5 h-1.5 bg-indigo-100 rounded-full opacity-20 animate-ping"
                    style={{ animationDuration: "5.5s" }}
                  ></div>
                  <div
                    className="absolute top-[75%] left-[15%] w-1 h-1 bg-indigo-100 rounded-full opacity-40 animate-ping"
                    style={{ animationDuration: "6s" }}
                  ></div>
                  <div
                    className="absolute top-[85%] left-[75%] w-2 h-2 bg-indigo-100 rounded-full opacity-10 animate-ping"
                    style={{ animationDuration: "7s" }}
                  ></div>
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"
                    style={{ animationDuration: "8s" }}
                  ></div>
                </>
              )}
              {selectedVisual === "aurora" && (
                <>
                  <div
                    className="absolute -top-[20%] -left-[10%] w-[120%] h-[60%] bg-[#9DC5B4]/30 rounded-full blur-[80px] animate-pulse"
                    style={{ animationDuration: "10s" }}
                  ></div>
                  <div
                    className="absolute -bottom-[20%] -right-[10%] w-[100%] h-[60%] bg-indigo-500/30 rounded-full blur-[80px] animate-pulse delay-1000"
                    style={{ animationDuration: "12s" }}
                  ></div>
                </>
              )}
              {selectedVisual === "fireflies" && (
                <>
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#4A6D5E]/20 to-transparent"></div>
                  <div
                    className="absolute top-[60%] left-[20%] w-1.5 h-1.5 bg-[#9DC5B4] rounded-full opacity-80 animate-ping"
                    style={{ animationDuration: "3s" }}
                  ></div>
                  <div
                    className="absolute top-[80%] left-[40%] w-2 h-2 bg-yellow-100 rounded-full opacity-60 animate-ping"
                    style={{ animationDuration: "5s", animationDelay: "1s" }}
                  ></div>
                  <div
                    className="absolute top-[40%] left-[70%] w-1 h-1 bg-[#9DC5B4] rounded-full opacity-80 animate-pulse"
                    style={{ animationDuration: "4.5s", animationDelay: "2s" }}
                  ></div>
                  <div
                    className="absolute top-[70%] left-[85%] w-1.5 h-1.5 bg-yellow-100 rounded-full opacity-60 animate-ping"
                    style={{ animationDuration: "6s", animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="absolute top-[50%] left-[10%] w-2 h-2 bg-[#9DC5B4] rounded-full opacity-70 animate-pulse"
                    style={{ animationDuration: "7s", animationDelay: "3s" }}
                  ></div>
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#9DC5B4]/10 rounded-full blur-3xl animate-pulse"
                    style={{ animationDuration: "8s" }}
                  ></div>
                </>
              )}
              {selectedVisual === "lotus" && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[#9DC5B4]/40 rounded-full animate-ping"
                    style={{ animationDuration: "8s" }}
                  ></div>
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[#9DC5B4]/20 rounded-full animate-ping"
                    style={{ animationDuration: "8s", animationDelay: "2s" }}
                  ></div>
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#9DC5B4]/10 rounded-full animate-ping"
                    style={{ animationDuration: "8s", animationDelay: "4s" }}
                  ></div>
                </div>
              )}
            </div>

            {/* Changing Text Prompt */}
            <p
              key={currentStep}
              className="text-white text-xl md:text-2xl font-medium tracking-wide z-10 animate-in fade-in slide-in-from-bottom-2 duration-1000 px-4"
            >
              {selectedMeditation.steps[currentStep]}
            </p>

            <button
              onClick={stopMeditation}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 hover:text-white text-sm flex items-center gap-2 transition-colors z-20 bg-slate-900/50 px-4 py-2 rounded-full backdrop-blur-sm"
            >
              <Square size={14} fill="currentColor" /> Stop Exercise
            </button>
          </div>
        )}
      </div>

      <div
        className={`${theme.surface} p-6 rounded-2xl shadow-sm border ${theme.border}`}
      >
        <h3 className="font-medium text-slate-800 flex items-center gap-2 mb-4">
          <BookOpen size={18} className="text-indigo-500" /> Sleep Hygiene Tips
        </h3>
        <ul className="space-y-3 text-sm text-slate-600">
          <li className="flex items-start gap-2">
            <span className="text-indigo-500 mt-0.5">•</span>
            <span>
              <strong>The Bed is for Sleep:</strong> If you can't fall asleep
              after 20 minutes, get up and do a quiet activity in another room
              until you feel sleepy.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-indigo-500 mt-0.5">•</span>
            <span>
              <strong>Consistent Schedule:</strong> Try to wake up at the same
              time every day, even on weekends, to set your circadian rhythm.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-indigo-500 mt-0.5">•</span>
            <span>
              <strong>Limit Caffeine & Alcohol:</strong> Avoid caffeine in the
              late afternoon and limit alcohol before bed, as it disrupts REM
              sleep.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
