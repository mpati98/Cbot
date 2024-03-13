import "./App.css";
import Layout from "./components/Layout/Layout"

import { ThemeProvider } from "styled-components"
import ChatBot from "react-simple-chatbot"
import { ChatbotScript } from "./components/BOT_Component/Chatbot_scripts"
import { ChatbotTheme } from "./components/BOT_Component/Chatbot_theme"
import { ChatbotConfig } from "./components/BOT_Component/Chatbot_config"
import { stepifyScript } from './components/BOT_Component/Utils';
import { Delayed } from './components/BOT_Component/Delay'

function App() {
  return (
    <div className="App">
      <Layout />
      <Delayed>
        <ThemeProvider theme={ChatbotTheme}>
          <ChatBot
            headerTitle="ArtiBot"
            {...ChatbotConfig}
            bubbleOptionStyle={{ backgroundColor: "white", color: "black" }}
            steps={stepifyScript(ChatbotScript)}
          />
          console.log(steps)
        </ThemeProvider>
      </Delayed>

    </div>
  );
}

export default App;
