import { RecentWork } from '../components'
import { Portfolio } from '../schemas/portfolio'

export default function RecentWorkContainer({ data }: { data: Portfolio[] }) {
    return (
        <RecentWork title="Recent work">
            <RecentWork.Wrapper>
                {data &&
                    data.map((item) => (
                        <RecentWork.Item
                            href="#"
                            src={item.after}
                            width={250}
                            height={150}
                            alt={item.title}
                            itemTitle={item.title}
                            itemCaption={item.description}
                            key={item.after}
                        ></RecentWork.Item>
                    ))}
            </RecentWork.Wrapper>

            <RecentWork.ShowMore href="/gallery">Kep Galeria</RecentWork.ShowMore>
        </RecentWork>
    )
}
