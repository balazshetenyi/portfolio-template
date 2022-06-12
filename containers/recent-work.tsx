import { RecentWork } from '../components'

export default function RecentWorkContainer() {
    return (
        <RecentWork title="Recent work">
            <RecentWork.Item
                href="#"
                src="/images/bg.jpg"
                width={250}
                height={150}
                alt="recent work"
                itemTitle="Furdoszoba"
                itemCaption="loremipsum dolor sit amet"
            ></RecentWork.Item>
            <RecentWork.Item
                href="#"
                src="/images/bg.jpg"
                width={250}
                height={150}
                alt="recent work"
                itemTitle="Furdoszoba"
                itemCaption="loremipsum dolor sit amet"
            ></RecentWork.Item>
            <RecentWork.Item
                href="#"
                src="/images/bg.jpg"
                width={250}
                height={150}
                alt="recent work"
                itemTitle="Furdoszoba"
                itemCaption="loremipsum dolor sit amet"
            ></RecentWork.Item>
            <RecentWork.Item
                href="#"
                src="/images/bg.jpg"
                width={250}
                height={150}
                alt="recent work"
                itemTitle="Furdoszoba"
                itemCaption="loremipsum dolor sit amet"
            ></RecentWork.Item>

            <RecentWork.ShowMore href="#">Kep Galeria</RecentWork.ShowMore>
        </RecentWork>
    )
}
