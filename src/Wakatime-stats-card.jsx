import Repositories from "./Repositories";
import "./output.css";

function Wakatime_stats_card() {
    return (
        <>
            <div className="font-mono flex flex-col justify-center items-center">
                <h2 className="font-mono mt-5 dark:text-white text-slate-800 flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-reception-4 mt-1" viewBox="0 0 16 16">
  <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z"/>
</svg>Wakatime stats card</h2>
                <img src="https://github-readme-stats.vercel.app/api/wakatime?username=Thecode764&layout=compact&theme=dracula" alt="My wakatime stats card" className="mt-5"/>
                <Repositories />
            </div>
        </>
    );
}

export default Wakatime_stats_card;
