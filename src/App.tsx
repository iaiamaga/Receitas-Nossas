import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Torta de limão do aniversário da Iara</h1>
          <p>
           Receita de torta de limão baseada em algumas receitas da internet. Referências:
          </p>
        </div>
        
      </section>


      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Ingrdientes</h2>
          <p>adapte a quantidade conforme for necessário na sua receita</p>
        
            <li>3 pacotes de biscoito maisena (total: 300g)</li>
            <li>4 colheres de margarina ou manteiga derretida</li>
            <li>2 a 4 colheres de água potável</li>
            <li>2 lata de leite condensado</li>
            <li>2 lata de creme de leite</li>
            <li>3 ovos</li>
            <li>3 limões</li>
          <ul>
            <li>
              <a href="https://receitas.globo.com/tipos-de-prato/tortas/torta-de-limao-simples-4eb1a585e316e93d6e001832.ghtml" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore receita no Receitaria
              </a>
            </li>
            <li>
              <a href="https://youtube.com/shorts/jDfG_rDA27A?si=Umpc7k0bnnxAiPnz" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Explore receita em vídeo no youtube da Metida a Gourmet
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>modo de preparo:</h2>
          <ol>
            <li>Primeiro triture os biscoitos até ficarem bem finos.</li>
            <li>Em seguida, misture os biscoitos triturados com a margarina derretida e a água. Comece misturando com a espátula, depois com as mãos. aperte e amasse até virar uma massaque fica firme quando aperta.</li>
            <li>Forre o fundo de uma forma, previamente untada, com a mistura de biscoitos e pressione bem para formar a base da torta. Reserve.</li>
            <li>Raspe as cascas de limão, não precisa ser muito nem pouco, varia com a sua preferência. Rale com um ralador ou com a faca, pare de ralar no momento em que chegar na parte branca da casca do limão, queremos apenas o verde.</li>
            <li>Se quiser pode acender o forno e preaquecer por 10  minutos</li>
            <li>Separe as claras das gemas dos ovos.</li>
            <li>Esprema os 3 limões.</li>
            <li>Em uma tigela, ou no liquidificador, misture o leite condensado, o creme de leite, as gemas dos ovos e o suco dos limões (coloque aos poucos se achar que tiver muito suco). Bata/misture até obter um creme homogêneo.</li>
            <li>Se quiser raspas de limão nesse creme pode adicionar, eu adicionei.</li>
            <li>Despeje o creme sobre a base de biscoitos na forma.</li>
            <li>Leve ao forno preaquecido a 180°C por cerca de 20 minutos ou até que o creme esteja firme.</li>
            <li>Se quiser uma segunda camada de merengue: misture as claras dos ovos com 4 colheres de açucar, coloque em banho maria misturando o tempo todo até que não de para sentir o açicar na mistura.</li>
            <li>Depois de misturar, bata as claras em neve até que fiquem firmes. Coloque por cima do creme de limão, quando tiver saido do forno, e polvilhe as raspas de limão</li>
            <li>Polvilhe as raspas de limão por cima.</li>
            <li>Deixe esfriar e leve à geladeira por pelo menos 2 horas antes de servir.</li>
          </ol>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
