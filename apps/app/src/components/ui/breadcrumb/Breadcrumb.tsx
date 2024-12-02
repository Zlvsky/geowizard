import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from './BreadcrumbRaw'

function Breadcrumbs({ links }: { links: { path?: string; title: string }[] }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {links.map((link, index) => (
          <BreadcrumbItem key={index}>
            {index === links.length - 1 ? (
              <BreadcrumbPage>{link.title}</BreadcrumbPage>
            ) : (
              <BreadcrumbLink href={link.path}>{link.title}</BreadcrumbLink>
            )}
            {index < links.length - 1 && <BreadcrumbSeparator />}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default Breadcrumbs
