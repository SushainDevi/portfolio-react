import sliceAnnotationLarge from '~/assets/slice-annotation-large.jpg';
import sliceAnnotationPlaceholder from '~/assets/slice-annotation-placeholder.png';
import sliceAnnotation from '~/assets/slice-annotation.jpg';
import sliceAppLarge from '~/assets/slice-app-large.jpg';
import sliceAppPlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceApp from '~/assets/slice-app.jpg';
import sliceBackgroundBarLarge from '~/assets/slice-background-bar-large.jpeg';
import sliceBackgroundBarPlaceholder from '~/assets/slice-background-bar-placeholder.jpg';
import sliceBackgroundBar from '~/assets/slice-background-bar.jpeg';
import sliceBackgroundLarge from '~/assets/slice-background-large.webp';
import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
import sliceBackground from '~/assets/slice-background.webp';
import sliceIrlPlaceholder from '~/assets/slice-irl-placeholder.jpg';
import sliceIrl from '~/assets/slice-irl.gif';
import sliceSidebarAnnotationsLarge from '~/assets/slice-sidebar-annotations-large.png';
import sliceSidebarAnnotationsPlaceholder from '~/assets/slice-sidebar-annotations-placeholder.png';
import sliceSidebarAnnotations from '~/assets/slice-sidebar-annotations.png';
import sliceSidebarLayersLarge from '~/assets/slice-sidebar-layers-large.png';
import sliceSidebarLayersPlaceholder from '~/assets/slice-sidebar-layers-placeholder.png';
import sliceSidebarLayers from '~/assets/slice-sidebar-layers.png';
import sliceSlidesLarge from '~/assets/slice-slides-large.jpg';
import sliceSlidesPlaceholder from '~/assets/slice-slides-placeholder.jpg';
import sliceSlides from '~/assets/slice-slides.jpg';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './slice.module.css';

const title = 'LLaMA-3-Like Transformer Model Implementation';
const description =
  'An implementation of a transformer-based model inspired by LLaMA-3 architecture. This project focuses on building an advanced language model using state-of-the-art transformer techniques.';
const roles = ['Transformer Model Development', 'Natural Language Processing', 'Deep Learning'];


export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Slice = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/SushainDevi/LLaMA-3-Like-Transformer-Model-Implementation"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceAppPlaceholder}
              alt="LLaMA-3-like transformer model interface demonstrating language generation capabilities."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Model Architecture</ProjectSectionHeading>
              <ProjectSectionText>
              The model is based on the LLaMA-3 architecture, leveraging transformer layers to process and generate natural language. It uses attention mechanisms to capture relationships between words in a sequence, allowing for more accurate and coherent language generation.
              The system is designed to handle large-scale datasets and can be fine-tuned for various NLP tasks, such as text generation, translation, and summarization.
              </ProjectSectionText>
              <ProjectSectionText>
              This transformer-based model aims to push the boundaries of natural language understanding by offering advanced capabilities in processing and generating human-like text across multiple contexts.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarLayers} 350w, ${sliceSidebarLayersLarge} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="Sidebar view showing genres and playlists tailored to user preferences."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarAnnotations} 350w, ${sliceSidebarAnnotationsLarge} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="List of personalized recommendations based on user listening history."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Enhancing Language Generation Accuracy</ProjectSectionHeading>
              <ProjectSectionText>
              A challenge often faced in natural language processing is generating coherent and contextually relevant text.
              This transformer model improves upon language generation by utilizing advanced attention mechanisms and transformer layers to capture complex word dependencies. 
              It continuously refines its outputs based on large-scale datasets and fine-tuning for specific tasks, ensuring higher accuracy in text generation.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${sliceSlides} 800w, ${sliceSlidesLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceSlidesPlaceholder}
              alt="Interface showing user feedback and playlist creation based on recommendations."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={`${sliceBackgroundBar} 440w, ${sliceBackgroundBarLarge} 880w`}
                  width={440}
                  height={790}
                  placeholder={sliceBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className={styles.gridForeground}>
                <Image
                  srcSet={`${sliceAnnotation} 440w, ${sliceAnnotationLarge} 880w`}
                  width={440}
                  height={340}
                  placeholder={sliceAnnotationPlaceholder}
                  alt="Preview of song recommendation with audio features and mood indicators."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Model Insights</ProjectSectionHeading>
              <ProjectSectionText>
                By continuously training on diverse datasets and fine-tuning through user feedback, 
                the model improves its ability to generate meaningful and contextually accurate text. 
                It ensures that the generated content remains relevant and coherent across different tasks, 
                such as summarization, translation, and dialogue generation, providing high-quality outputs that align with user expectations.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                The LLaMA-3-like transformer model significantly improved the accuracy of natural language generation tasks, 
                enabling more coherent and contextually relevant outputs. 
                Feedback from testing showed a notable improvement in text quality, 
                with the model excelling in tasks such as summarization, translation, and conversational AI. 
                This resulted in enhanced user satisfaction due to more human-like interactions and reliable text processing.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={sliceIrl}
              width={940}
              height={500}
              placeholder={sliceIrlPlaceholder}
              alt="Users interacting with the personalized recommendation system on Spotify."
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
/*
const title = 'Personalized Music Recommendation System';
const description =
  'A music recommendation system that leverages Spotify API to analyze user preferences and recommend songs based on listening history, mood, and genres.';
const roles = ['API Integration', 'Machine Learning', 'Recommendation Engine Development'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Slice = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={spotifyBackground}
          srcSet={`${spotifyBackground} 1280w, ${spotifyBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={spotifyBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/SushainDevi/Spotify-Music-Recommendation"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${spotifyApp} 800w, ${spotifyAppLarge} 1920w`}
              width={800}
              height={500}
              placeholder={spotifyAppPlaceholder}
              alt="Spotify music recommendation interface showing personalized song recommendations."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Building a Tailored Listening Experience</ProjectSectionHeading>
              <ProjectSectionText>
                The system uses Spotify’s API to analyze users’ music listening habits, including song metadata like tempo, key, and energy levels, to recommend songs that fit their taste. The engine also considers the user’s favorite genres and the mood of the songs to create a personalized playlist.
              </ProjectSectionText>
              <ProjectSectionText>
                This personalized recommendation system aims to enhance users’ listening experience by delivering tailored music suggestions in real-time.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${spotifySidebar} 350w, ${spotifySidebarLarge} 700w`}
                width={350}
                height={750}
                placeholder={spotifySidebarPlaceholder}
                alt="Sidebar view showing genres and playlists tailored to user preferences."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${spotifySidebarRecommendations} 350w, ${spotifySidebarRecommendationsLarge} 700w`}
                width={350}
                height={750}
                placeholder={spotifySidebarRecommendationsPlaceholder}
                alt="List of personalized recommendations based on user listening history."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Enhancing Recommendation Accuracy</ProjectSectionHeading>
              <ProjectSectionText>
                A challenge often faced by users is discovering new music that matches their tastes. The recommendation system improves upon this by leveraging machine learning algorithms to continuously refine its suggestions based on user feedback and updated listening behavior.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${spotifySlides} 800w, ${spotifySlidesLarge} 1920w`}
              width={800}
              height={500}
              placeholder={spotifySlidesPlaceholder}
              alt="Interface showing user feedback and playlist creation based on recommendations."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={`${spotifyBackgroundBar} 440w, ${spotifyBackgroundBarLarge} 880w`}
                  width={440}
                  height={790}
                  placeholder={spotifyBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className={styles.gridForeground}>
                <Image
                  srcSet={`${spotifyRecommendation} 440w, ${spotifyRecommendationLarge} 880w`}
                  width={440}
                  height={340}
                  placeholder={spotifyRecommendationPlaceholder}
                  alt="Preview of song recommendation with audio features and mood indicators."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Deep Personalization</ProjectSectionHeading>
              <ProjectSectionText>
                By continuously analyzing user feedback and listening patterns, the system fine-tunes its recommendations to offer deeper personalization. It ensures that users always receive fresh and relevant song suggestions that match their mood, energy, and genre preferences.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                The Spotify-based recommendation system enhanced users’ ability to discover new music they love, resulting in more personalized listening sessions. Feedback showed a notable increase in user satisfaction, as they spent less time searching and more time enjoying music.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={spotifyIrl}
              width={940}
              height={500}
              placeholder={spotifyIrlPlaceholder}
              alt="Users interacting with the personalized recommendation system on Spotify."
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
*/