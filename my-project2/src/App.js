import "./App.css";

function App() {
  return (
    <div
      style={{ height: "100vh" }}
      className="flex justify-center items-center p-2"
    >
      <div className="border shadow-xl mt-3 rounded">
        <h1 className=" text-center rounded-t bg-black text-white p-2">Deneme Sayfasi</h1>
        <div className="md:columns-2 lg:columns-3">
          <img
            className=""
            src="https://th.bing.com/th/id/R.fe69cff1eea942f1972d5d50ba89c987?rik=bEqPU8Jr%2br7WKg&pid=ImgRaw&r=0"
            alt=""
          />

          <div className="sm:m-2 flex items-center flex-col">
            <p className=" text-justify">
              1Aslan, mit den Varianten Arslan und Arsalan, ist ein türkischer
              männlicher Vorname[1] und Familienname mit der Bedeutung „der
              Löwe“, der mit derselben Bedeutung auch im Mongolischen auftritt.
            </p>
            <p className=" text-justify mt-2">
              2Aslan, mit den Varianten Arslan und Arsalan, ist ein türkischer
              männlicher Vorname[1] und Familienname mit der Bedeutung „der
              Löwe“, der mit derselben Bedeutung auch im Mongolischen auftritt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
