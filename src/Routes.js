import homeComponent from "@/components/homeComponent/home";
import articlesPageOne from "@/components/articlesPageComponents/articlesPageOne";
import articlesPageTwo from "@/components/articlesPageComponents/articlesPageTwo";
import contactComponent from "@/components/contactComponent/contactComponent";

export default [
    {path: '/', component: homeComponent},
    {path: '/contact', component: contactComponent},
    {path: '/articles-page-one', component: articlesPageOne},
    {path: '/articles-page-two', component: articlesPageTwo}
]
