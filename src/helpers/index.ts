export function formatCurrency(quantity: number){
    return new Intl.NumberFormat('es-Es',{
        style: 'currency', currency: 'Eur'
    }).format(quantity)
}