import "../styles.css";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

function ClasesComponent() {
  return (
    <div className="body">
      <h1>Clases</h1>
      <hr />
      <Link to="/">
        {" "}
        <MdArrowBack size={50} />
      </Link>
      <h2> ¿Qué es una clase? </h2>
      <p>
        La definicion de diccionario dice que una clase es un conjunto o
        categoría de cosas que tienen alguna propiedad o atributo en común y se
        diferencian de otras por clase, tipo o calidad.{" "}
      </p>

      <p>
        Una clase se usa en programación orientada a objetos para describir uno
        o más objetos.{" "}
      </p>
      <img
        className="class-img"
        alt="ilustracion sobre como funcionan las clases"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATQAAACkCAMAAAAuTiJaAAACT1BMVEX///8APnhwhqXv8fUyXIzh5Orq7PCeq79Ma5OdrsP4+fs3YI7V2uJif6OotMbe4umOnrZie50KR37M0967xNKFlrAgUoXCytZ+kawAAAAAQnv///v///D///z///f3/////+fcsIx8R0f//99hPluxdUes0PXk///v4bqcYjym2P8USn/c5fHu8vjO2+yVtNgAL4Di4uLf/////9mIqcwuAACqb0hPAAD//LnK4//428EyS1lHZZ4YITpWW17O9P55tO//792+0OZ+oM2mv97Gm3CRteNZWVSAgYDLysrLp4AkNXSvjlrn+f/I6f/iyJ5Tj9fLvLyLZF1zTjCfmreDc3R3e4unkX1/j6HNpWNfmsWckqDk1547UIvy0ZbNolpNjsShoaCajohDT2z/7MhwYln/5bHWxbbIvJxdbJzl5Mk2aZ67uoZgWGOuooju4NRaR2sAJ11sNAAAIGGyw8RNToUAS2pKBCmZxtqwlWHbs2wAAC6x6fJuGgB8weWfSQDXkT4AAFoAAEsAABcAADm+ejtLSC3J4cJZJxlOPBrbrGAbNEoIUZn0wItuTEmddF1yjJCBZnlQRlruyqufXypFDzofbLOHQSafcDTSl2WKU0kcAACk4v9GPm6VUyRWTWhPQTJYLE4vJDyGaj8sDyhqOkxsk4GeaVO11co5Eg6XclB8ZVuXkINFLGFxOT4+ACR3USWFu9BBNjQhGkJUHgA4QCY4GydHAABqJwDbtIJtYUdFcH9AOE9EQ1pNLiZhKkFCgc0KJymGo3ExADKCg1xsXvI7AAAQi0lEQVR4nO2djV8a15rHTwAJDu8RESoMGKKggpSXWjUWBFFeqqDJaqI3WoxGTbwUtzV3bbRpkqabtKkm1dwkaoxNG5tevUmT3m53TXdvsi9/2J4BewUjAwwzgGF+n48oLzPz+J3nPGfO8JznAECLFq2CEtqtz7UJ+0rqYzZbo+JpVa7t2E9yHG8Hln9SHKahpaFAM/aIQdP19NYBxwmPFfF5TtKtFU99/dgjhKb+Q+epAQN8igyyOpFcm5Xf+iCIPWKe1jR0mmsIDB/Uj5w56cyxVXmuwPsqEIE2Ouwc4xiAafysCj13pDHXduW1FB0T3j+ehb3nSEjyyYAh7P2QH/aOT/pzbVd+S9Ht9XaWe/VgzFvGQ8Jeid4x1V2Xa6to0aJFixYtWrRoAYDkj3KNIlXxivkcbp5ILCrZD9zYDJa0VCDh5YPKBCKulF+SayRJJWGJJbm2IU4lDGlxrm1IojKpjJlrG3YJEUkFubYBV0KuLA9DSDErn1soUsrJNz/DhPAZ+WjWtoSs/Ipnv6vkUB67WjGL8KZK3btyeQsAgXf+uRGg1XK5nK8izzC+jLx9kS1+KeFNRz76eOqP57XoB3/6l2mA1v9J8Il8mjzDMjiblItLvJu6MDMLgw9wfHrxszsQGtcfeYEslR0ib19kS0o8pF26bMd+DV62X7jiR+vl8s9bSeyHS/IZWhnhTS9djTjWF5/b/lXegtazrr0bJDGmvaHQdO9+PDU+ee36sMfz5YCqnqv9auY+eYa9odCUgRXYe1bIqwBom/HflmpHPr1DnmFvKDRqtX+hMSUCClSUimH7F5qklkW+pKJUDNvH0N6i4JBiGlr6oqEREA2NgGhoBERDIyAaGgEVFrTPbriHcbLmHULQcCWFlNPCglbtAn1fJ/7wXLNKLTEkP2SBQTOCQPM5Tw+/UzfvFvt1J3vcE0D92L1qVty8FSp+9h7n2jeN5T73wjRYdLtbE+20sKDdFg9t1uj+fB9YHjaCpTu6RzXovfaOFjDYrLrbj3ka0BxpHBxQadbN91oS77TAoMm8QqA7bwCDLC1oatY1I2CJ33HU9kJqXq6KNE8I7cJ7NvfK/dGfOQnnuxQWNNg8QQSaZdUPKiZ0q3ZFtbX+InxRsQNtcCJ6+zaQMPoVFrQHUWjQhT5Z84T8um97X0xodeseT3EE2uhPjGsPG9U3ezy9Wp/HbU2008KCFkkdU2IP5UwmAnTNbPgIlEwmM/oWAn9H3mOqEGbiL8gLC9ou6QZSuL7YQwUNDRUSO2RBQyMqGhoB0dAIqNChlY/FDdAV3anMdiwsaJXDdhj+faEdUGhlS+wHNMdrUjhkYUG7/R0cYTq+f7RNxrFuL4+HpqahgdeGUadXtSDww3wNcByzudDHv9qmKvuP9frBuU2bVYWOh+BbTT3u9iSHLDBoU9UtYPnH5RrNelX5xjT0NLSSq53r1zx0ove6AgOqwF+qqpP7WoFBa5+b0J1XL9eMfndr6EV/BFoLaGgOcLVgsbnvOdY8t1iiZElqBQbNaFk/3KKB0FadJrZhO6Y1DOikEWj9kY4A9QWTHLKwoD0wgg8umyEZ9GZvt8DuqL5likDr3JB1b94fWRj661+qxqY2E96y3VZhQQvrgaMOoKZOgHq93k4Q9grhS4oSlcLr1QNl2MszGcLesmTpkIUFjSTR0AiIhkZA+x8aC3ceQS6hUXFoksTBnVmZQ2iSWgoOTZIYfLx3cwhNxKHg0CRJUsvGezd30LgpfSo3KuLgzSiTHEKYZAtJCZqExSPrX6RAArw5vJLaA+TrUArQhPnsaAAgYk7ivH5ESIWSzxlm8rl5PLEYiimWluXZLHYel0Pw68GsiSmrZUjy58QiJaUscb4zgyrjc1lcDp+gGAzsh0F0813icrmc/K4v8Q/xiM90OsifaLXyJ/jFZE2d2hdVczKSwWV16RHEoHdZrU5iuR0FJr3TaN2pUWqAz1xO/RvvJxnJ1Wqs2+VbiN7pshqd+dOr5JUMdcZWZwKfMrhaW116QzY9Ds3/wIDUGY0u3BLyhjoX/EhdFridGPqDE5S3dWF/j+VvtXHoSC52chwIBNcK+wZKwak3+KZzL2dBFFp9bMaq4xstlUdOR3qn1ZhGeWqsbzBS2DdEsqEDb4O24NiUH/viR9HdjX3F0y1Bfd9N5cV6Cojz9dCffCPYN0CPo4SbMrKQQtMTbdsN69ZE5+129Jio+xu7btJ7eroiGTTU6+WpQHSNFKWJxIoiMcIL/ck3dsK+oY70proNbVWFNc+7VZXto6vO8MbFDyKvTuI3T01P79AmQxVdIyX8kz3mrSYXOebB0O/MzNsNdU7y+4atSPO8g8U05XUM2t8ODg35l7CpDU2TZtxNl4IAWJbbITSEGfE0JRu7UmKyDcqlic6MLUOw0E9GXMLGDbClkhjimp61IufWp0HbsH9Oqq1vV687IYLAAHNsuunlLN5xLMtYtZqlIHqX43FXhScNjnnP/HNw6olH7H12g5EhNXjVn07oTyrYNxjJ6xs0pz2eRqAcm+rx+EF9O3Cc9vTay8c9MgM61ot3BTIyjxVKWgoqnraDxebwmqEtCCxHzMdrQFg1F8zIJkKhP6kM8ERQ0Dcoq5NlxsVIHflwZUtkYZmB8Bqz74bb1ht+ibXppQwKTUVCP+Gtk+490jeQ2FQdG+J0rsyWpJ1A98Su+NQKITnWDFsTIIpyzLw0kT60aGPMPPQnFdY3WHf6huyO9FFfyM2BF3Y3b7nFftg8FSdsbrHWsu7mA8s6N90LY5cLXlvB0J+VwSPC3OkbXLlb1MWxmlkMchr1LmN27f+9b3Dlauw4+nN/Rhe3+iAVoT+pDHoYQFuD+3QBIdhYXNSMeZIJ0RuDyZIo81bwgiAnd6dcrix6OPmJA2mmGZBkGTt7lpUI+BwuBZXhUhWXyz+4d14DWyLLrWUchmDP5B52KYslk5QVpSU2m53eBngqk8i4LNkexgk4UrFAIkzVIhJNikooEfBZe2XflXA56df2DXu93l291KXLae8lVhKOdLezMRnSUrwcrtcs8lJR0NMgYvF3WyHk8tP/+l7pk8vld+IvSy69nVl/WcTgxidGITJW6hDQSmiR/PLrF+FNnozXfSxh8eP/NbZYTOC7MqXvb9gNN5PJZABokakIQU2mLzKEBhA+J+6MitJbg0HR8b4ZQDuK4IMBOCI2FSHlvpV2A2ZoJvdpeNz4/DuBlEiaiNL36OSQU/eLXM7SN8z8csXeIZf/W6bQQBErNp+sKM01UjBo5dCOGWvTu13giwP2NqwQuO4dubwfe5jIxDJBfHaglFBVfKVvRS5vvXeg85T8ecM7/ezRFRk7Y0/DKuHH7ELESTmeRYRBG/y8ONxxWXtvQHO8dXTFauq4Yq6AngZ9ruMq/j1YfCGc2NNZIiWUYBlpno4Hr0DDyvOGR7Ng9HNjxjENYM1gJ4gZUsuq3REGbe7jRtB3xbz4Xu+vs3MzVeDCjHlx5T5Y/NnzIiNooDj2DBaL0zud21L6rtqhlTOe41erGlZmgeXfj3p+yRwaIt5pkUJumkt9YNAa5Ed7fvlapfkP+dug4R3MJlXFyvD0pauZQhPGRrFSBqH/VDkegh2B+qbNXQV0R2bhED8U+vFs5qNNxk6wKKlNczyE+sRacGrezYfbfSW/CABWn00PNJtrs+ENW+9aRtCQt2JapCy/FiGRxUDLZIbOV2+TfOsTiQ1jpW8kNM3dzG5tva4CgEa+aGgEREMjoHSgsQUHKVDiMUjq0HhUGCZIOKJMB5qklkO+cNZfSB0ag0WBZbUJT2da0LI8gS51aOmOF1IRciDh8IiGlkjMA7SnpS0aGgFRAo1pMiUZ3qMpJB8XGLTPhk+fwUlEckhUmVbFfwOhVbuiqZYJNNesQotoT9sD2oTu25Csc3zhTKhKF1p7Ie0ceep5Oat48FtI8Ow98bWHjYoTodBzUGFL7JMUQKuY8XzUkniMXu7tVD9owd0fJkqg3T7aE/LrnviBZdIPKu7oJhtBZWvlRdBwXnu3PaZWufqYnWBVfMLQJoDlz4nX03Cs25Xh5DeLqPE0oxLZoyq+283QxlfFX/CPbA4nTHmiAloz0Dy0P74VqlEv275sVzw+eeZoFXrCvfAc+G7NP3+8clTQ0QJ0T91is+N7mzgBP4qgge2q+A8bQVsQ+pz6wXSkCmZsVXxWBlXxCUMbHtroR++2AkV9Cxj5Tzv8a+tOgKVSH7b7BrQRT6ts0TytAX3WC9KEzZhaaODUEXevXecOfRsE8NS6ZSgGzfKUe+1IIzy/7lVzm+2/Eq7XTAU0rkmows6c4/AsAI958K+m85jPP7qPTamI1lC0/N3m/rZf0bFgTLDPbFzc6gaI3R6lpnlG3V2BZbQvmJeNsMuKrgThi0KDnmZZj37XrniZ4LooO9BIr4pPGBq2+qwC6410Dz3HL6J3f4O9u+JmyL1mbnsF39k4OgW7pvF1T2g6YDtzNsG37YU9jIrOVUpbBQ7tKQ0tzZ0AoExlCPy6ChsaQWUJGuqLawfqEymM1wsM2mdX/VjKhHy7srbSpCK7Kv4bCK16AauK/+JX6qrikwgtHJ/dpkthoi810E5PmsHWD5s1QDdvk6FwRDddyd+0VYEAlmqiPmH7Yb5mzpZJVXyi0BZ/tsIL2dHrLdvPEQQEBmI/oLzwKolVgCpocKCJHv5xucby0A86LkY8Laga5FueNIKlV1vNQHfd+SyjqviEL25v9MJB+NJ/d20//8IKAs1xn88dtPbBicAAVhX/kc395e6q+FuRqviD33GSjRMoGUbVzwJL6H+6QPlN91ltxfUbZ3Wcm9Dnyx/bbH6sYfzQpdhwJ5kgTdGAXXH3pxoN9LRVLE35H1Xxz8GnFRNbQWDBYtrWHdxdUnQ/bfBr0NZ/oQutDGKLXmKe9r/2kSNmaN/cIdPLRvVHXV8Fk9hFDbRIVXwt7CKVvpCnd1ax8Rs2omt4v/OTtZ5ev2bTc+vvVR96FpKFXEo8bWTdfGy2r0v9/W+e/5Oao81Ts+w8PAuUx8ZZWnCha+QM7nx0QBE0GF7LEaCEv5SRSUNKJhJ9KbIUYPQp3qJ/26IEmrJymK+C0DYuYvb9Dq2q+j5whMZX7cq+V0Cpm8S/e1tgI4KKZtAgn8bILK4NDUlUfcPFga+xy8bB1aENq6qj98P5rsWhvya6vbGtAoOG6gEqNGB1grDpPkKVwsRDhdgkjHJTpKyNl8fWh728JF1UgUEjRzQ0AkoZGgN3N9mGFpcSj3t7J9vQDsVAE+HPI8g2NP7OWzxp4sLW+DshLBxozNh5BAL8CUhZhsaMm7GCO28xy9B4sTNWhLW4k2myDK0kZrIiwsANt1mGVho3wZOLa1qWoYm4MU+KcQrPU5U+mgiagXMw9qmkFq8VSA6RPi28iJ3w/y2Rxs4LN7BKceKtWEa+ZbzYwBUnETcuiiEyvAL0Zdlcf4HNie+VJFKcmuWMt8g37K1DCaAJdlti4HAShzWETYX2Hp3yOLvbo4hVnNDXmJRYtvfhBNLXFoE0MGpFvFzXfEZ4otrXahJAa8VlhOajkihDiVi6x7ljSqRSfqmoOIcqZbBq95ouUsKv5chKc2iYSCau5SSI+iWljNyqNFF3pC/OsWXF+bwgEC1atGhlpP8HCaXEUe13juYAAAAASUVORK5CYII="
      />
      <h3>¿Para qué sirven las clases?</h3>

      <p>
        {" "}
        Sirve como plantilla para crear o instanciar objetos específicos dentro
        de un programa. Si bien cada objeto se crea a partir de una sola clase,
        una clase se puede utilizar para crear instancias de varios objetos.
      </p>

      <p>
        {" "}
        Las clases en JavaScript se basan en prototipos, pero también tienen
        alguna sintaxis y semántica que no se comparten con la semántica de
        clase ES5. La palabra clave extends es usada en declaraciones de clase o
        expresiones de clase para crear una clase hija.
      </p>

      <br />

      <span>
        <a href="http://net-informations.com/faq/oops/class.htm">Fuente</a>
      </span>
    </div>
  );
}

export default ClasesComponent;
