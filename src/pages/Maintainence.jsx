import logo from '../assets/zhengcheng_logo.png'

const Maintainence = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
        {/* Logo */}
        <img
          src={logo}
          alt="上海峥程科技有限公司 Logo"
          className="mx-auto w-24 h-24 mb-6 object-contain"
        />

        {/* 公司名称 */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          上海峥程科技有限公司
        </h1>

        {/* 分隔线 */}
        <div className="h-px bg-gray-200 my-4" />

        {/* 主体内容 */}
        <p className="text-gray-600 text-base mb-6">
          我们的网站正在维护与升级中，请稍后访问。
        </p>

        {/* 动态进度指示 */}
        <div className="flex justify-center">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce mx-2 [animation-delay:-0.15s]" />
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" />
        </div>

        {/* 页脚 */}
        <p className="text-gray-400 text-sm mt-8">
          © 2025 上海峥程科技有限公司
        </p>
      </div>
    </div>
  )
}

export default Maintainence
