import React, { Component } from 'react';
import './Tech.css';
import './../../App.css';
import './../../common/Colors.css';
import original from './img/original.jpg';
import lightroom from './img/lightroom.jpg';
import final from './img/final.jpg';
import Comparison from './../comparison/Comparison';
import BlinkImage from './../blinkImage/BlinkImage';

class Tech extends Component {
    render() {
        return(<div className={`Common-container Blink`}>
            <div className="Common-title">Tech</div>
            <div className="Common-seperator"/>
            <div className="Tech-container Blink-paragraph">
                <p>
                Editing a photo is just as important as capturing one. 
                For some genres of photography, editing is the most crucial part. 
                Sometimes a photo that directly comes from the camera can be lifeless or dull. 
                Editing helps bringing that photo to life. It also helps to express what you really want with a picture. 
                But that process is not easy if you are doing it well. It takes time to master the techniques. Styles go out of date really quickly. 
                You have to adopt new techniques.
                </p>
                <p>
                We can't define a standard for editing. It varies from person to person. 
                We can’t say this editing style is good or that editing style is bad. 
                What we do is to find a style that cater the audience we are targeting. It is just that we shouldn’t over do it. 
                It is always a good idea to get feedbacks from the audience to know whether they really like it or not. But remember, 
                “Too many cooks spoil the soup”.
                </p>
                <p>
                For our mind, our work is the best work. That is how we normally tend to think. 
                But if you get lost in that thought, your photography career will end sooner or there will be no improvement. 
                My advice is to always try to be better than the last time. You should experiment new things. Never settle just because audience already likes your photos. 
                Follow other photographers. I’m not asking to copy. Just adopt their styles and try to do improved versions of them. Invent a whole new style if you can. 
                Build up a unique style for yourself so that audience can recognize your work even without your name on it.
                </p>
                <p>
                Let’s talk about how Blink does it. I have developed my own way to treat photos of Blink. 
                It can be broken down into 2 major steps, Processing in Lightroom and processing in Photoshop. 
                Both are great and popular softwares for photo manipulation. This article will not describe how it is done (In a future post, I will), 
                but it will show what is happening behind the scenes. That means I will not go in to much technical details here.
                </p>
                <p>I should thank <a className="Blink" href="https://www.wesaturate.com" rel="noopener noreferrer" target="_blank">Wesaturate</a> for letting me download high quality raw images for this demonstration. Be sure to check them out.</p>
                <p>This is the output after going through aforementioned steps.</p>
                <p> <BlinkImage className="Tech-image" src={final}/> </p>
                <p>This is the original photo.</p>
                <p><BlinkImage className="Tech-image" src={original}/></p>
                <p>Here is the transformation after going through first step, Processing in Lightroom.</p>
                <p> <Comparison before={original} after={lightroom}/> </p>
                <p>I have only done color adjustments and spot adjustments with a brush. 
                    Basic adjustments consist of opacity, contrast, sharpness, highlights, shadows and etc. 
                    You can get creative with split toning. But it should be done with caution because it can 
                    really mess up your photo. I have applied the settings using a homegrown Lightroom preset. 
                    Be sure to check my <a className="Blink" href="/presets">presets</a>.</p>
                <p>Here is what has happened to the picture in the second step</p>
                <p><Comparison before={lightroom} after={final}/></p>
                <p>Color adjustments will hardly happen in this step. I will follow this step mostly for portraits. 
                    In other words this is like an extra make up layer. Human skin is not perfect. 
                    This step would treat those without making the person look artificial. There is not a clear line to cross in this step. 
                    It all depends on your requirement. I personally like the photo to look natural. So I have not done a crazy edit here. 
                    I have taken care of the things that we call as imperfections. </p>
                <p>I’m basically altering the face here. In that case, anyone should be careful because features of the face define the person. 
                    So I should careful enough not to alter features of the face. For example, remove a pimple is okay because removing 
                    it won’t change the identity of the person. But altering a feature like nose is not okay unless if the client really asks for it. 
                    Because changing it would give a face of a different person.</p>
                <p>Finally here is the comparison of original photo and edited photo.</p>
                <p><Comparison before={original} after={final}/></p>
                <p>I hope you liked what you just saw. <a className="Blink" href="/contact">Contact me</a> for more details.</p>
            </div>
        </div>);
    }
}

export default Tech;