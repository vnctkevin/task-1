
const techStack = [
    {
        name: "Shopify",
        logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
    },
    {
        name: "OXID",
        logo: "data:image/png;base64,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",
    },
    {
        name: "OpenCart",
        logo: "https://cdn.worldvectorlogo.com/logos/opencart.svg",
    },
    {
        name: "Magento",
        logo: "https://cdn.worldvectorlogo.com/logos/magento.svg",
    },
    {
        name: "woocommerce",
        logo: "https://cdn.worldvectorlogo.com/logos/woocommerce.svg",
    },
    {
        name: "PrestaShop",
        logo: "https://cdn.worldvectorlogo.com/logos/prestashop.svg",
    },  
    {
        name: "CommerceTools",
        logo: "https://www.magnolia-cms.com/.imaging/mte/corpweb2021/1200x628/dam/marketplace/logos/commercetools-logo.png0/jcr:content/commercetools-logo.png",
    }
    
];

techStack.forEach((tech) => {
    const techStackContainer = document.getElementById("techStackContainer");
    techStackContainer.innerHTML += `
        <div class="techStackCard">
            <div class="logo-circle">
                <img src="${tech.logo}" alt="${tech.name}" class="icon" />
            </div>
            <p>${tech.name}</p>
        </div>
    `;
});
