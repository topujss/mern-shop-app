const AdvanceTodo = () => {
  return (
    <>
      <h1 className="text-3xl text-emerald-500 capitalize font-semibold">advance Todo </h1>
      <section className="top-main max-w-screen-lg mx-auto">
        <input
          type="text"
          placeholder="Type your notes..."
          className=" w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-green-500 py-1 px-3 leading-8 transition-all duration-300 ease-in-out"
        />
        <section className="schedule flex justify-center gap-5 my-5">
          <div className="date">
            <label htmlFor="" className="font-semibold">
              Schedule date:{' '}
            </label>
            <input
              type="date"
              className="rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-green-500 py-1 px-3 leading-8 transition-all duration-300 ease-in-out"
            />
          </div>
          <div className="time">
            <label htmlFor="" className="font-semibold">
              Schedule time:
            </label>
            <input
              type="time"
              className="rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-green-500 py-1 px-3 leading-8 transition-all duration-300 ease-in-out"
            />
          </div>
        </section>
        {/*  */}
        <section className="bottom-main flex justify-center gap-5 my-5">
          <div className="order">
            <input id="radio1" type="radio" value="" name="default-radio" />
            <label for="radio1" class="ml-2 text-sm font-medium text-gray-900 ">
              ASC
            </label>
            <input checked id="radio2" type="radio" value="" name="default-radio" />
            <label for="radio2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              DESC
            </label>
          </div>
          <div className="day flex gap-2">
            <input type="checkbox" name="" id="" value="fri" /> <label htmlFor="">Friday</label>
            <input type="checkbox" name="" id="" value="sat" /> <label htmlFor="">Saturday</label>
            <input type="checkbox" name="" id="" value="sun" /> <label htmlFor="">Sunday</label>
            <input type="checkbox" name="" id="" value="mon" /> <label htmlFor="">Monday</label>
            <input type="checkbox" name="" id="" value="tue" /> <label htmlFor="">Tueday</label>
            <input type="checkbox" name="" id="" value="wed" /> <label htmlFor="">Wednesday</label>
            <input type="checkbox" name="" id="" value="thu" /> <label htmlFor="">Thursday</label>
          </div>
        </section>
        <button
          className="px-6 py-1 font-sans font-semibold text-white bg-orange-500 rounded-lg h-[60px] text-xl"
          type="submit"
        >
          Submit the form
        </button>
      </section>
      <section className="mt-5 w-full">
        <table class="min-w-full">
          <thead class="bg-white border-b">
            <tr>
              <th scope="col" class="text-lg font-bold text-purple-700 px-4 py-3">
                Todo ID
              </th>
              <th scope="col" class="text-lg font-bold text-purple-700 px-4 py-3">
                Todo
              </th>
              <th scope="col" class="text-lg font-bold text-purple-700 px-4 py-3">
                Days
              </th>
              <th scope="col" class="text-lg font-bold text-purple-700 px-4 py-3">
                Date
              </th>
              <th scope="col" class="text-lg font-bold text-purple-700 px-4 py-3">
                Time
              </th>
              <th scope="col" class="text-lg font-bold text-purple-700 px-4 py-3">
                Setting
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="text-emerald-600 font-light px-6 py-4 whitespace-nowrap">id</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">title</td>

              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">data</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">id</td>

              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">title</td>

              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">data</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default AdvanceTodo;
