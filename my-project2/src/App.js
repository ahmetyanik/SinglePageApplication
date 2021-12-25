import "./App.css";

function App() {
  return (
    <div class="flex justify-center mt-2">
      <div
        style={{ height: "500px" }}
        className="border box-border  shadow-md shadow-teal-700 "
      >
        <img
          className="object-cover w-96 h-96"
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80"
        />

        <div className="text-center">
          <label className="animate-bounce w-6 h-6">Isim:</label>
          <span>Ahmet</span>
        </div>
      </div>

      <textarea class="caret-indigo-500"></textarea>

     
    </div>
  );
}

export default App;
