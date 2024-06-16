import Wakatime_stats_card from "./Wakatime-stats-card";
import "./output.css"

function Most_used_languages() {
    return (
        <>
            <div className="flex justify-center items-center flex-col font-mono">
                <h2 className="font-mono mt-5 dark:text-white text-slate-800 flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-battery-full mt-1" viewBox="0 0 16 16">
  <path d="M2 6h10v4H2z"/>
  <path d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8"/>
</svg>Most used languages</h2>
                <img className="mt-5" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Thecode764&theme=dracula&langs_count=300" alt="Most used languages" />
                <Wakatime_stats_card />
            </div>
        </>
    )
}

export default Most_used_languages;