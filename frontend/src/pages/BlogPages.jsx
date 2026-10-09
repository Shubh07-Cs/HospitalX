import { useEffect } from 'react'
import { ArrowLeft, ArrowRight, CalendarDays, UserRound } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import {
  ContentPageHeader,
  ContentPreviewNotice,
} from '../components/content/ContentPageHeader.jsx'
import { Badge } from '../components/ui/badge.jsx'
import { ButtonLink } from '../components/ui/button.jsx'
import { Card, CardContent } from '../components/ui/card.jsx'
import { Container } from '../components/ui/container.jsx'
import { EmptyState } from '../components/ui/states.jsx'
import { Section } from '../components/ui/section.jsx'
import { blogs } from '../data/blogs.js'
import { hospital } from '../data/hospital.js'

function BlogPage() {
  useEffect(() => {
    document.title = `Health articles | ${hospital.name}`
  }, [])

  const featuredArticle = blogs[0]
  const articleList = featuredArticle ? blogs.slice(1) : []

  return (
    <>
      <ContentPreviewNotice />
      <ContentPageHeader
        breadcrumbs={[{ label: 'Health articles' }]}
        eyebrow="Health information"
        title="Articles and patient guides"
        description="Health information on this preview site is not medical advice. Articles must be reviewed by a qualified clinician and approved by the hospital before publication."
      />
      <Section>
        <Container>
          {featuredArticle ? (
            <Card className="mb-8 overflow-hidden border-medical-primary-light bg-white">
              <CardContent className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[0.35fr_1fr] lg:items-center">
                <div className="flex aspect-[4/3] items-center justify-center rounded-lg bg-medical-primary-light text-primary">
                  <CalendarDays aria-hidden="true" className="size-10" />
                </div>
                <div>
                  <Badge variant="secondary">Featured · sample draft</Badge>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                    {featuredArticle.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-medical-secondary-text">
                    {featuredArticle.excerpt}
                  </p>
                  <ArticleMeta article={featuredArticle} />
                  <ButtonLink
                    to={`/blog/${featuredArticle.slug}`}
                    variant="outline"
                    className="mt-5"
                  >
                    Read article preview
                    <ArrowRight aria-hidden="true" />
                  </ButtonLink>
                </div>
              </CardContent>
            </Card>
          ) : (
            <EmptyState
              title="Articles are being prepared"
              description="Approved, clinically reviewed articles will appear here."
            />
          )}

          {articleList.length > 0 && (
            <div className="grid gap-4 sm:grid-cols-2">
              {articleList.map((article) => (
                <Card key={article.id} className="h-full">
                  <CardContent className="flex h-full flex-col items-start pt-5">
                    <div className="flex aspect-[16/9] w-full items-center justify-center rounded-md bg-medical-soft text-medical-muted-text">
                      <CalendarDays aria-hidden="true" className="size-8" />
                    </div>
                    <Badge variant="outline" className="mt-4">
                      {article.category} · sample
                    </Badge>
                    <h2 className="mt-3 text-lg font-semibold">{article.title}</h2>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{article.excerpt}</p>
                    <ArticleMeta article={article} />
                    <Link
                      className="mt-auto inline-flex min-h-10 items-center gap-1 pt-4 text-sm font-semibold text-primary hover:text-medical-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      to={`/blog/${article.slug}`}
                    >
                      Read preview
                      <ArrowRight aria-hidden="true" className="size-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </Container>
      </Section>
    </>
  )
}

function BlogDetailPage() {
  const { slug } = useParams()
  const article = blogs.find((item) => item.slug === slug)
  const relatedArticles = article
    ? article.relatedArticleIds.map((id) => blogs.find((item) => item.id === id)).filter(Boolean)
    : []

  useEffect(() => {
    document.title = `${article?.title ?? 'Article not found'} | ${hospital.name}`
  }, [article])

  if (!article) {
    return (
      <>
        <ContentPageHeader
          breadcrumbs={[{ label: 'Health articles', to: '/blog' }, { label: 'Article not found' }]}
          eyebrow="Article directory"
          title="Article not found"
          description="This article is not in the current directory."
        />
        <Section>
          <Container>
            <EmptyState
              title="Return to health articles"
              description="The article link may be outdated or the content may not have been added."
              action={
                <ButtonLink to="/blog" variant="outline">
                  View articles
                </ButtonLink>
              }
            />
          </Container>
        </Section>
      </>
    )
  }

  return (
    <>
      <ContentPreviewNotice />
      <ContentPageHeader
        breadcrumbs={[{ label: 'Health articles', to: '/blog' }, { label: article.title }]}
        eyebrow={`${article.category} · draft preview`}
        title={article.title}
        description={article.excerpt}
      />
      <Section>
        <Container className="max-w-3xl">
          <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <ArticleMeta article={article} />
            <Badge variant="outline">Clinical review: {article.clinicalReviewStatus}</Badge>
          </div>
          {article.image ? (
            <img
              src={article.image}
              alt=""
              className="mb-8 aspect-[16/9] w-full rounded-lg object-cover"
            />
          ) : (
            <div className="mb-8 flex aspect-[16/9] items-center justify-center rounded-lg bg-medical-primary-light text-primary">
              <CalendarDays aria-hidden="true" className="size-10" />
            </div>
          )}
          <Card className="border-amber-200 bg-amber-50">
            <CardContent className="py-5">
              <Badge variant="outline">Not for clinical use</Badge>
              <p className="mt-3 leading-relaxed text-amber-950">
                This is sample article content for layout review only. It has not been clinically
                reviewed or approved for patients.
              </p>
            </CardContent>
          </Card>
          <div className="mt-8 space-y-6">
            {article.content.length ? (
              article.content.map((block, index) => (
                <ArticleBlock key={`${article.id}-${index}`} block={block} />
              ))
            ) : (
              <EmptyState
                title="Article content is being prepared"
                description="This sample article has no publishable body content. Clinically reviewed and hospital-approved copy will replace this message."
              />
            )}
          </div>
          <Link
            className="mt-8 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-primary hover:underline"
            to="/blog"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            All health articles
          </Link>
        </Container>
      </Section>

      {relatedArticles.length > 0 && (
        <Section className="border-y border-border bg-white">
          <Container>
            <h2 className="mb-6 text-2xl font-semibold">Related articles</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {relatedArticles.map((related) => (
                <Card key={related.id}>
                  <CardContent className="py-5">
                    <Badge variant="outline">{related.category}</Badge>
                    <h3 className="mt-3 font-semibold">{related.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{related.excerpt}</p>
                    <ButtonLink to={`/blog/${related.slug}`} variant="outline" className="mt-4">
                      Read preview
                      <ArrowRight aria-hidden="true" />
                    </ButtonLink>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  )
}

function ArticleMeta({ article }) {
  return (
    <span className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
      {article.author ? (
        <span className="inline-flex items-center gap-1.5">
          <UserRound aria-hidden="true" className="size-3.5" />
          {article.author}
        </span>
      ) : (
        <span>Author to be confirmed</span>
      )}
      {article.publishedAt ? (
        <time dateTime={article.publishedAt}>{article.publishedAt}</time>
      ) : (
        <span>Date to be confirmed</span>
      )}
    </span>
  )
}

function ArticleBlock({ block }) {
  if (block.type === 'heading') {
    return <h2 className="text-xl font-semibold">{block.text}</h2>
  }
  return <p className="text-base leading-8 text-medical-secondary-text">{block.text}</p>
}

export { BlogDetailPage, BlogPage }
