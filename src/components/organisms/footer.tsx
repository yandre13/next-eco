import { APP_NAME } from '@/constants/seo'

const year = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="p-5 flex-center">
        {year} {APP_NAME}. All Rights reserved.
      </div>
    </footer>
  )
}

export default Footer
