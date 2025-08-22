

const Footer = () => {
  return (
    <div className='w-full border-t border-gray-300 flex justify-center p-5'>

      <div className='content'>

      <div className="logo flex items-center">
        <img
          src="https://t4.ftcdn.net/jpg/02/14/62/05/360_F_214620530_mHWODUVFNAufCuNfqHiTo8AM2SeUfQtH.jpg"
          className="aspect-square w-15 object-cover"
          alt="Logo"
        />
        <p className="text-xl text-secondary font-bold font-serif">Tech</p>
      </div>

      <div className="nav-links flex gap-5 px-10 *:p-2 *:hover:text-secondary">
        <a href="/about" className="flex justify-center items-center gap-2">About</a>
        <a href="/services" className="flex justify-center items-center gap-2">Services</a>
        <a href="/FAQ" className="flex justify-center items-center gap-2">FAQ</a>
        <a href="/products" className="flex justify-center items-center gap-2">Products</a>
      </div>

      </div>

    </div>
  )
}

export default Footer