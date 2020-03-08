import React from "react";
import "./global.css";
import "./App.css";
import "./Sidebar.css";

export default function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmFor="github_username">Usuário do github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmFor="techs">Tecnologias</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main></main>
    </div>
  );
}
