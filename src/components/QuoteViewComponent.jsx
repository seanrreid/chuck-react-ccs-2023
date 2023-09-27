// eslint-disable-next-line react/prop-types
export const QuoteViewComponent = ({ quote }) => {
    if (quote) {
        return <p>{quote}</p>
    } else {
        return <p>Loading...</p>
    }
}