

export const TodolistInput = () => {
    return(
        <div className="flex flex-row gap-5">
            <input
                type="text"
                id="createTodoInput"
                defaultValue="hello"
                className="  w-[180px] h-[40px] bg-white rounded-lg  grid row-start-1 peer  min-h-[auto]  border-0  p-[0.32rem]  "
                placeholder="Create new Task"
            />
            <button
                className=" w-[40px] h-10 row-start-2 bg-green-500 border-black border-2 rounded transform active:scale-75 transition-transform">
                <img src="src/common/assets/add.svg" alt="Add"/>
            </button>

        </div>
    )
}