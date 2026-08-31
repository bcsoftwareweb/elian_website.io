import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout.tsx'
import { AboutPage } from './pages/AboutPage.tsx'
import { CategoryPage } from './pages/CategoryPage.tsx'
import { CollectionsPage } from './pages/CollectionsPage.tsx'
import { ContactPage } from './pages/ContactPage.tsx'
import { HomePage } from './pages/HomePage.tsx'
import { ProductDetailPage } from './pages/ProductDetailPage.tsx'
import { ProductsPage } from './pages/ProductsPage.tsx'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productSlug" element={<ProductDetailPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route
            path="/collections/:categorySlug"
            element={<CategoryPage />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
