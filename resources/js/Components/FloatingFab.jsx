export default function FloatingFab() {
    return (
        <button className="fixed bottom-md right-md bg-tertiary-fixed text-on-tertiary-fixed p-md rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all flex items-center gap-sm z-40">
            <span className="material-symbols-outlined">forum</span>
            <span className="font-label-md text-label-md pr-xs">
                Tanya Senada
            </span>
        </button>
    );
}
