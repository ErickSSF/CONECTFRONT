
interface PageTitleTypes {
  title: string,
  subtitle: string
}

function PageTitle({
  title,
  subtitle,
}: PageTitleTypes) {

  return (
    <div className="flex flex-col gap-1 items-baseline">
      <h1 className="text-6xl font-semibold text-blue-800">{title}</h1>
      <p className="font-semibold text-gray-500 pl-1">{subtitle}</p>
    </div>
  )
}

export default PageTitle
