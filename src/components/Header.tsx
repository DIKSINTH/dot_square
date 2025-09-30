import React, { useState } from "react";
import { Search, Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
    {
      title: "Services",
      categories: [
        {
          title: "Mobile Apps",
          icon: "📱",
          items: [
            "Android",
            "React Native",
            "Ios",
            "Flutter",
            "Swift",
            "Kotlin",
            "Xamarin",
          ],
        },
        {
          title: "Ecommerce",
          icon: "🛒",
          items: [
            "Adobe Commerce",
            "Shopify",
            "Symfony",
            "WooCommerce",
            "BigCommerce",
            "Magento",
          ],
        },
        {
          title: "CMS",
          icon: "📝",
          items: [
            "Wordpress",
            "Drupal",
            "Craft",
            "Acquia",
            "Joomla",
            "SharePoint",
            "Umbraco",
            "Sitecore",
            "Pantheon",
            "AEM Development",
            "Sitefinity",
          ],
        },
        {
          title: "Custom Development",
          icon: "⚙️",
          items: [
            "PHP",
            "Laravel",
            "ROR",
            "Power Platform",
            "HTML5",
            "JavaScript",
            "Zoho Creator",
            "Python",
            "DotNet",
            "NodeJS",
            "Angular",
            "Spring",
            "C#",
          ],
        },
        {
          title: "Full Stack Development",
          icon: "💻",
          items: ["MEAN", "Full Stack", "MERN", "Java", "React JS"],
        },
        {
          title: "CRM",
          icon: "👥",
          items: [
            "ServiceNow",
            "Salesforce",
            "Odoo",
            "HubSpot",
            "Zoho",
            "MS Dynamics",
          ],
        },
        {
          title: "Games",
          icon: "🎮",
          items: ["Unity", "Unreal", "Maya", "3DS MAX", "Blender"],
        },
        {
          title: "Cloud",
          icon: "☁️",
          items: ["AWS", "Azure", "Google Cloud", "DevOps"],
        },
        {
          title: "Other",
          icon: "🔧",
          items: ["Golang", "AR/VR"],
        },
      ],
    },
    {
      title: "Cloud",
      items: [
        { name: "AWS Solutions", href: "#" },
        { name: "Azure Services", href: "#" },
        { name: "Google Cloud", href: "#" },
        { name: "DevOps", href: "#" },
        { name: "Cloud Migration", href: "#" },
        { name: "Cloud Security", href: "#" },
      ],
    },
    {
      title: "Data & AI",
      items: [
        { name: "Machine Learning", href: "#" },
        { name: "Data Analytics", href: "#" },
        { name: "Business Intelligence", href: "#" },
        { name: "AI Solutions", href: "#" },
        { name: "Data Science", href: "#" },
        { name: "Predictive Analytics", href: "#" },
      ],
    },
    {
      title: "Security",
      items: [
        { name: "Cybersecurity", href: "#" },
        { name: "Penetration Testing", href: "#" },
        { name: "Security Audits", href: "#" },
        { name: "Compliance", href: "#" },
        { name: "Data Protection", href: "#" },
        { name: "Security Consulting", href: "#" },
      ],
    },
    {
      title: "Industries",
      items: [
        { name: "Healthcare", href: "#" },
        { name: "Finance", href: "#" },
        { name: "E-commerce", href: "#" },
        { name: "Education", href: "#" },
        { name: "Real Estate", href: "#" },
        { name: "Manufacturing", href: "#" },
        { name: "Retail", href: "#" },
        { name: "Government", href: "#" },
      ],
    },
    {
      title: "On-Demand Developer",
      items: [
        { name: "Hire Developers", href: "#" },
        { name: "Dedicated Teams", href: "#" },
        { name: "Staff Augmentation", href: "#" },
        { name: "Remote Teams", href: "#" },
        { name: "Project-based Hiring", href: "#" },
        { name: "Long-term Contracts", href: "#" },
      ],
    },
    {
      title: "Technologies",
      items: [
        { name: "React.js", href: "#" },
        { name: "Node.js", href: "#" },
        { name: "Python", href: "#" },
        { name: "Java", href: "#" },
        { name: "PHP", href: "#" },
        { name: "Angular", href: "#" },
        { name: "Vue.js", href: "#" },
        { name: ".NET", href: "#" },
      ],
    },
    {
      title: "Success Stories",
      items: [
        { name: "Case Studies", href: "#" },
        { name: "Client Testimonials", href: "#" },
        { name: "Portfolio", href: "#" },
        { name: "Awards", href: "#" },
        { name: "Industry Recognition", href: "#" },
        { name: "Success Metrics", href: "#" },
      ],
    },
  ];

  const handleMouseEnter = (title: string) => {
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="bg-gray-900 text-white">
      {/* Top bar with phone numbers */}
      <div className="hidden lg:block bg-gray-800 py-2">
        <div className="container mx-auto px-6 flex justify-end space-x-6 text-sm">
          <span className="flex items-center">
            <span className="text-blue-400 font-semibold mr-1">US</span>
            +1 456 342 6799
          </span>
          <span className="flex items-center">
            <span className="text-blue-400 font-semibold mr-1">IND</span>
            +91 9999999999
          </span>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-black p-0 rounded mr-3">
              <div className="grid grid-cols-3 gap-1">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 ${
                      i === 4 ? "bg-white" : "bg-blue-500"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
            <span className="text-white text-xl font-bold">Dotsquares</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 ml-4">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.title)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center space-x-1 hover:text-blue-400 transition-colors duration-200">
                  <span>{item.title}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-0 mt-2 bg-black text-white rounded-lg shadow-xl z-50 transition-all duration-200 ${
                    activeDropdown === item.title
                      ? "opacity-100 visible transform translate-y-0"
                      : "opacity-0 invisible transform translate-y-2"
                  } ${
                    item.title === "Services" ? "w-[1200px] -left-96" : "w-56"
                  }`}
                >
                  {item.title === "Services" ? (
                    // Special layout for Services mega menu
                    <div className="p-6">
                      <div className="grid grid-cols-3 gap-8">
                        {item.categories?.map((category, categoryIndex) => (
                          <div key={categoryIndex} className="space-y-3">
                            <div className="flex items-center space-x-2 pb-2 border-b border-white">
                              <span className="text-lg">{category.icon}</span>
                              <h3 className="font-bold text-white">
                                {category.title}
                              </h3>
                            </div>
                            <div className="space-y-2">
                              {category.items.map((subItem, subIndex) => (
                                <a
                                  key={subIndex}
                                  href="#"
                                  className="block text-sm text-white hover:text-blue-600 hover:bg-orange-50 px-2 py-1 rounded transition-colors duration-150"
                                >
                                  {subItem}
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    // Standard dropdown for other menu items
                    <div className="py-2">
                      {item.items?.map((subItem, index) => (
                        <a
                          key={index}
                          href={subItem.href}
                          className="block px-4 py-3 text-sm hover:bg-orange-50 hover:text-blue-600 transition-colors duration-150"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </nav>

          {/* Search and Contact */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 bg-gray-800 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-64"
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-200">
              Contact us
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-800 rounded"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-gray-800">
            {navigationItems.map((item) => (
              <div key={item.title} className="mb-4">
                <div className="font-semibold text-blue-400 mb-2">
                  {item.title}
                </div>
                <div className="pl-4 space-y-2">
                  {item.title === "Services"
                    ? item.categories?.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="mb-3">
                          <div className="flex items-center space-x-2 text-sm font-medium text-gray-300 mb-1">
                            <span>{category.icon}</span>
                            <span>{category.title}</span>
                          </div>
                          <div className="pl-6 space-y-1">
                            {category.items.map((subItem, subIndex) => (
                              <a
                                key={subIndex}
                                href="#"
                                className="block py-1 text-xs text-gray-400 hover:text-blue-400 transition-colors"
                              >
                                {subItem}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))
                    : item.items?.map((subItem, index) => (
                        <a
                          key={index}
                          href={subItem.href}
                          className="block py-1 text-sm hover:text-blue-400 transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                </div>
              </div>
            ))}
            <div className="pt-4 border-t border-gray-800">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-3 bg-gray-800 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
              />
              <button className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded font-semibold transition-colors">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
