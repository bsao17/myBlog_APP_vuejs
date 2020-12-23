import homeComponent from "@/components/homeComponent/home";
import articlesPageOne from "@/components/articlesPageComponents/articlesPageOne";
import articlesPageTwo from "@/components/articlesPageComponents/articlesPageTwo";

export default [
    {path: '/', component: homeComponent},
    {path: '/articles-page-one', component: articlesPageOne},
    {path: '/articles-page-two', component: articlesPageTwo}
]
