import { GiAlarmClock } from 'react-icons/gi';
import { VscEdit } from 'react-icons/vsc';
import { MdDeleteForever } from 'react-icons/md';

function Home() {
  return (
    <div className="dark:bg-gray-900">
      <div className="w-4/5 ml-auto container py-20 px-6">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="w-full flex flex-col justify-between items-start dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4"
            >
              <div>
                <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">
                  13 things to work on
                </h4>
                <p className="text-gray-800 mb-1 dark:text-gray-100 text-sm">
                  Probabo, inquit, sic agam, ut labore et voluptatem sequi
                  nesciunt, neque porro quisquam est, quid malum, sensu iudicari
                </p>
              </div>
              <div className="w-full flex flex-col items-start">
                <div className="my-2 border border-gray-800 rounded-full px-3 py-1 text-gray-800 dark:text-gray-400 dark:border-gray-700 text-xs flex items-center">
                  <GiAlarmClock className="text-base" />
                  <p className="ml-2">7 Sept, 23:00</p>
                </div>
                <div className="flex items-center justify-between text-gray-800 dark:text-gray-100 w-full">
                  <p className="text-sm">March 28, 2020</p>
                  <div className="flex">
                    <div className="w-8 h-8 rounded-full bg-red-800 dark:text-red-800 dark:bg-gray-100 text-white flex items-center justify-center">
                      <MdDeleteForever className="text-lg" />
                    </div>
                    <div className="w-8 h-8 ml-2 rounded-full bg-gray-800 dark:text-gray-800 dark:bg-gray-100 text-white flex items-center justify-center">
                      <VscEdit />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
