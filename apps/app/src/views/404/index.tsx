import BigContainer from '@/components/layout/containers/Container'
import PageWrap from '@/components/layout/containers/PageWrap'
import { Button } from '@/components/ui/common/Button'
import { PATHS } from '@/router/data'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <PageWrap>
      <Helmet>
        <title>404 Not found - GeoWizard</title>
      </Helmet>
      <BigContainer>
        <div className="-mb-10 mt-20 flex flex-col items-center justify-center">
          <h1 className="text-8xl font-black ">404</h1>
          <h2 className="mb-3 text-2xl font-bold">{'Page Not Found :('}</h2>
          <Link to={PATHS.HOME}>
            <Button>Go back to home</Button>
          </Link>
        </div>
      </BigContainer>
    </PageWrap>
  )
}

export default PageNotFound
