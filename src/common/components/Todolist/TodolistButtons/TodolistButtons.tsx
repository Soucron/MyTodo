export const TodolistButtons = () => {
    return (
        <div className="flex flex-row alig justify-center items-center gap-7  ">
            <button
                type="button"
                className={'h-[40px] w-[50px] border-2 border-black rounded bg-purple-400 hover:bg-purple-800 shadow-[0_4px_9px_-4px_#3b71ca] transform active:scale-110 transition-transform  '}
            >
                All
            </button>
            <button
                type="button"
                className={'h-[40px] w-[80px] border-2 border-black rounded bg-blue-200 hover:bg-blue-800 shadow-[0_4px_9px_-4px_#3b71ca] transform active:scale-110 transition-transform'}
            >
                Active
            </button>
            <button
                type="button"
                className={'h-[40px] w-[100px] border-2 border-black rounded bg-green-200 hover:bg-green-800 shadow-[0_4px_9px_-4px_#3b71ca] transform active:scale-110 transition-transform'}
            >
                Completed
            </button>
        </div>

    )
}