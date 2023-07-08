export interface ICarouselItem {
    source: string;
    key: string;
    title?: string;
    description?: string;
}

export interface ICarouselDataProps {
    carouselData: Array<ICarouselItem>
}