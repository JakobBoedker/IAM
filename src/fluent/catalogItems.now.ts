import { CatalogItem, SingleLineTextVariable } from '@servicenow/sdk/core'

export const onboarding_catalog_item = CatalogItem({
    $id: Now.ID['onboarding-catalog-item'],
    name: 'onboarding',
    shortDescription: 'Onboarding',
    description: 'Onboarding',
    flow: Now.ID['onboarding_flow'],
    active: false,
    
    catalogs: ['global'],
    categories: ['x_2194970_iam_automation'],
    
    variables: {
        name: SingleLineTextVariable({
            question: 'Name',
            mandatory: true,
        }),
        initials: SingleLineTextVariable({
            question: 'Initials',
            mandatory: true,
        }),
        email: SingleLineTextVariable({
            question: 'Email',
            mandatory: true,
        }),
        start_date: SingleLineTextVariable({
            question: 'Start Date',
            mandatory: true,
        }),
        
    }
})

export const offboarding_catalog_item = CatalogItem({
    $id: Now.ID['offboarding-catalog-item'],
    name: 'offboarding',
    shortDescription: 'Offboarding',
    description: 'Offboarding',
    flow: Now.ID['offboarding_flow'],
    active: false,
    
    catalogs: ['global'],
    categories: ['x_2194970_iam_automation'],
    
    variables: {
        name: SingleLineTextVariable({
            question: 'Name',
            mandatory: true,
        }),
        initials: SingleLineTextVariable({
            question: 'Initials',
            mandatory: true,
        }),
        email: SingleLineTextVariable({
            question: 'Email',
            mandatory: true,
        }),
        end_date: SingleLineTextVariable({
            question: 'End Date',
            mandatory: true,
        }),
        
    }
})