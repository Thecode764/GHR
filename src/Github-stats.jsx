import Most_used_languages from "./Most-used-languages";
import "./output.css"

function Github_status() {
    return (
        <>
            <div className="flex flex-col justify-center items-center font-mono">
                <h1 className="dark:text-white text-slate-800 mt-5 flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pc mt-1" viewBox="0 0 16 16">
  <path d="M5 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm.5 14a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1M5 1.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5M5.5 3h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1"/>
</svg>Github stats</h1>
                <img className="mt-5" src="https://github-readme-stats.vercel.app/api?username=Thecode764&show_icons=true&theme=dracula" alt="My github stats" />
            </div>
            
            <Most_used_languages />
        </>
    )
}

export default Github_status;