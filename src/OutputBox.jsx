import { marked } from 'marked';

const OutputBox = ({output}) => {

    return <div className="OutputBoxContainer" dangerouslySetInnerHTML={{__html:marked.parse(output)}}></div>
}

export default OutputBox