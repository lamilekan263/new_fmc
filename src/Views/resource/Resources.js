import React from 'react'

const resourceLinks = [
  {
    id: "1",
    title: "PDF DRIVE",
    url:
      "https://www.pdfdrive.com/search?q=Medical%20&pagecount=&pubyear=&searchin=&em=&page=2",
  },
  {
    id: "2",
    title: "FREE BOOK CENTER",
    url:
      "http://www.freebookcentre.net/medical_text_books_journals/medical_text_books_online.html",
  },
  {
    id: "3",
    title: "BOOK TREE",
    url: "https://booktree.ng/category/free-medical-books/",
  },
  {
    id: "4",
    title: "FREE BOOK 4 DOCTORS",
    url: "http://www.freebooks4doctors.com/",
  },
  {
    id: "5",
    title: "MED BOOK SHELF",
    url: "http://medbookshelf.info/",
  },
];

const Resources = () => {
    return (
      <div className="p-5">
        <h1 className="text-lg md:text-2xl text-center text-gray-600 mb-4">
          Library Database
        </h1>
        <div className="md:grid grid-cols-2 gap-4  justify-center items-center text-center">
          <a href="/">
            <div className="p-5 bg-gradient-to-r from-green-900 via-green-700 to-green-500  text-white mt-4 md:ml-3 h-64 rounded-lg flex flex-col items-center justify-center shadow-2xl hover:bg-green-900 cursor-pointer ">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                />
              </svg>

              <h1>Digital</h1>
            </div>
          </a>
          <a href="/">
            <div className="p-5 bg-gradient-to-r from-green-900 via-green-700 to-green-500  text-white mt-4 md:ml-3 h-64 rounded-lg flex flex-col items-center justify-center shadow-2xl hover:bg-green-900 cursor-pointer ">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                />
              </svg>

              <h1>Physical</h1>
            </div>
          </a>
        </div>

        <div>
          <h1 className="text-lg md:text-4xl text-gray-600 text-center my-4">
            Free Resources
          </h1>
          <div className="md:grid grid-cols-4 gap-4  justify-center items-center text-center">
            {resourceLinks.map((resource) => {
              return (
                <a href={resource.url} key={resource.id}>
                  <div className="p-5 bg-gradient-to-r from-green-900 via-green-700 to-green-500  text-white mt-4 md:ml-3 h-64 rounded-lg flex flex-col items-center justify-center shadow-2xl hover:bg-green-900 cursor-pointer ">
                    <svg
                      className="w-10 h-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>

                    <h1>{resource.title}</h1>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    );
}

export default Resources
