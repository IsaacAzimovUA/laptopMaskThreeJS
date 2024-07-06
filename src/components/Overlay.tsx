import { TypeAnimation } from 'react-type-animation'

const Overlay = () => {
  return (
    <div className="wrapper">
      <section>
        <h1
          style={{
            fontSize: '3rem',
            margin: '0',
          }}
        >
          Dmytro Hordus
        </h1>

        <TypeAnimation
          preRenderFirstString={true}
          wrapper="p"
          sequence={[
            '> Hey there! 👋',
            1000,
            '> Hey there! 👋 I’m a front-end developer',
            1000,
            '> Hey there! 👋 I’m a back-end developer',
            1000,
            '> Hey there! 👋 I’m a full-stack developer who loves crafting dynamic web experiences. From sleek interfaces with TailWind CSS 🎨 to seamless state management with React and Redux Toolkit ⚛️, I’m all about making the web engaging and fun.',
          ]}
          speed={50}
          style={{
            fontSize: '1.3rem',
            display: 'inline-block',
            fontFamily: 'fonts/JetBrainsMono_Regular.ttf',
            textAlign: 'justify',
          }}
        />
      </section>
    </div>
  )
}

export default Overlay
