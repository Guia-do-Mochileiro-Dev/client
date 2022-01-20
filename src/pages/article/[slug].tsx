import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import { ArticlesTemplate } from 'templates/Articles'
import { PostProps } from 'types/api'
import client from 'graphql/client'
import GET_POSTS from 'graphql/queries/getPosts'
import GET_POST_SLUG from 'graphql/queries/getPostSlug'

export default function Articles(props: PostProps) {
  const router = useRouter()

  if (router.isFallback) return <p>Carregando...</p>

  return <ArticlesTemplate {...props} />
}

export async function getStaticPaths() {
  const { postPages } = await client.request(GET_POSTS)
  const paths = postPages?.map((post: PostProps) => ({
    params: { slug: post.slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  //const {postPages} = await client.request(GET_POST_SLUG, { slug: params?.slug })
  // Mock
  const postPages = {
    id: '2',
    cover: {
      alternativeText: '',
      url: '/uploads/cover_5074a4bf56.png'
    },
    created_at: '2022-01-06T22:46:37.087Z',
    title:
      'I Used to Think ‘Where Do You See Yourself in 10 Years’ Was a Horrible Interview Question',
    text: '<p>Job interviews are curious things. For ages and ages, the dynamic leaned heavily in favor of the employer. They had a job people wanted, so it stands to reason they had the upper hand.</p><p>In some ways, this made sense. If a company was going to recruit, onboard, and engage an employee, it would be fair to inquire about the employee’s future plans — or at least their intentions.</p><p>One of the famed questions was: <i>Where do you see yourself in 10 years?</i></p><p>I gave gloriously benign answers to this question when I began my career. <i>Well, hopefully, I’ll still be here and excelling! </i>That, of course, was nonsense. What 20-something knows what they’ll be doing in 10 weeks, let alone 10 years?</p><p>We weren’t thinking that far ahead, and the undergrad programs we recently finished weren’t training or encouraging us to think further than the immediate post-grad world. This was also lightyears before we reached a point where over four million people were <a href="https://www.nytimes.com/2022/01/04/business/economy/job-openings-coronavirus.html">quitting their jobs</a> per month.</p><p>Now we’re in a wildly different place.</p><p>If there were such a thing as the employment dyad, the upper hand now leans heavily towards the employee. And the icing on top is that employees have <a href="https://index.medium.com/we-moved-psychological-safety-from-the-bibliography-to-the-table-of-contents-in-2021-e954559751ce">finally put self-care</a> front and center.</p><h2>Is the 10-year question still relevant?</h2><p>Short story long, yes — but not in the way you might think. I ask that question of organizational prospects now, but I ask it with <i>them</i> in mind. It’s the same question, but the undertones are more nuanced, and the pitch looks more like this:</p><p><strong>The wind-up: </strong>Where do you see yourself in 10 years…</p><p><strong>The curveball: </strong>…because people barely stay in their jobs for <a href="https://www.bls.gov/news.release/pdf/tenure.pdf">four years</a>, and I want to make sure our company can help you get where you need to be, even if that’s not here.</p><p>I’d love to say I’m a forward-thinking organizationist, but I’m not. I’m a practical realist. I understand the ground is not shaking; it has already shaken. We’re in “the great [whatever you want to call it],” and employers and hiring managers can no longer rely on outmoded questions that lead to outmoded answers.</p><p>Instead, we have to put ourselves in the shoes of those we serve — and I do mean <i>serve</i>. Those in positions of influence have a tremendous obligation and responsibility to serve the people in our charge. That influence can take many shapes. We can demand tasks, assign jobs, or work collectively to reduce or remove hurdles.</p><p>The latter is what I’m getting at with the new-age 10-year question.</p><h2>What if you’re not in a position of influence?</h2><p>You are, even (and especially) if you don’t think you are. <i>But, Evan, how does that 10-year question work in reverse? </i>Imagine being a hiring manager and the candidate asks you this:</p><p><strong>“Where do you see </strong><i><strong>me</strong></i><strong> in 10 years?”</strong></p><p>Have you ever asked a question like that before? In the rising age of Gen-Z, I imagine bold inquiries like this will become more common, but I’ve still never had anyone ask <i>me</i> that question. That’s the reason I choose to ask it of candidates. I want them to know I’m thinking about their growth, next steps, and eventually their exit.</p><p>If employers can’t be part of the cultivation strategy for an employee, all they’re doing is stripping them of their abilities while hired, only to toss them back into the abyss when finished. And workers are no longer sticking around in those environments.</p><p>There is a great need for collective growth, and that decade arc is still a significant marker — it’s simply no longer angled entirely in the direction of the employer, and that’s a crucial distinction.</p><h2>Last words</h2><p>I often cite HR expert Rick Grimaldi when I talk about work, especially matters of change. Few people get it “right” like he does, like in his new book, <i>Flex</i>, when he opines:</p><blockquote><p>“We can spend our energy and resources working to shut out change that is uncomfortable, inconvenient, and frankly, inevitable. But it’s a useless endeavor in my experience. That path leads to irrelevancy.”</p></blockquote><p>Changing what we ask of future employees is important. But equally important is you — the future employee — knowing what questions you might/should ask, too.</p><p>When considered with the employee in mind, I love the 10-year inquiry, and I hope more people might think of it that way.</p>',
    slug: 'micro-frontend',
    author: {
      name: 'Letícia Silva',
      photo: {
        alternativeText: '',
        url: '/uploads/cover_5074a4bf56.png'
      }
    }
  }

  if (!postPages) {
    return { notFound: true }
  }

  return {
    revalidate: 60,
    props: postPages
  }
}
