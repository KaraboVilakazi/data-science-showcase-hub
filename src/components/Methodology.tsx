
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">Methodology</h2>
        <p className="section-subtitle text-center">
          Data science techniques and models applied to analyze educational outcomes
        </p>
        
        <Tabs defaultValue="data-prep" className="mt-8">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-ds-light rounded-md p-1 mb-8">
            <TabsTrigger value="data-prep" className="rounded-sm">Data Preparation</TabsTrigger>
            <TabsTrigger value="exploratory" className="rounded-sm">Exploratory Analysis</TabsTrigger>
            <TabsTrigger value="modeling" className="rounded-sm">Modeling</TabsTrigger>
            <TabsTrigger value="evaluation" className="rounded-sm">Evaluation</TabsTrigger>
          </TabsList>
          
          <TabsContent value="data-prep">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-ds-primary mb-4">Data Preparation & Cleaning</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    The raw educational data required significant preprocessing before analysis:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="font-semibold">Handling Missing Values:</span> Used multiple imputation for missing demographic data and mean/median imputation for continuous variables where appropriate.
                    </li>
                    <li>
                      <span className="font-semibold">Data Integration:</span> Merged multiple datasets using school identifiers, mapping geographic data to align district boundaries across different data sources.
                    </li>
                    <li>
                      <span className="font-semibold">Feature Engineering:</span> Created composite indices for socioeconomic status, school resources, and teacher qualifications to condense multiple related variables.
                    </li>
                    <li>
                      <span className="font-semibold">Normalization:</span> Standardized numerical features to ensure comparability across different scales and units.
                    </li>
                    <li>
                      <span className="font-semibold">Outlier Detection:</span> Used IQR method to identify and address statistical outliers in performance metrics.
                    </li>
                  </ul>
                  <p>
                    Python libraries used: pandas, numpy, scikit-learn
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="exploratory">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-ds-primary mb-4">Exploratory Data Analysis</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Comprehensive exploration of the data revealed significant patterns and relationships:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="font-semibold">Statistical Summaries:</span> Generated descriptive statistics to understand the distribution of educational outcomes across different provinces.
                    </li>
                    <li>
                      <span className="font-semibold">Correlation Analysis:</span> Calculated Pearson and Spearman correlations to identify relationships between socioeconomic factors and student performance.
                    </li>
                    <li>
                      <span className="font-semibold">Geospatial Visualization:</span> Created choropleth maps to visualize educational outcomes across different regions of South Africa.
                    </li>
                    <li>
                      <span className="font-semibold">Time Series Analysis:</span> Examined trends in performance metrics over the 5-year period to identify improvement or decline patterns.
                    </li>
                    <li>
                      <span className="font-semibold">Principal Component Analysis:</span> Applied PCA to identify the most influential factors affecting educational outcomes.
                    </li>
                  </ul>
                  <p>
                    Python libraries used: matplotlib, seaborn, plotly, geopandas
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="modeling">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-ds-primary mb-4">Statistical & Machine Learning Models</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Multiple modeling approaches were employed to analyze and predict educational outcomes:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="font-semibold">Multiple Linear Regression:</span> Used to quantify the relationship between various factors and student performance metrics.
                    </li>
                    <li>
                      <span className="font-semibold">Random Forest:</span> Applied to identify the most important predictors of educational outcomes and handle non-linear relationships.
                    </li>
                    <li>
                      <span className="font-semibold">Gradient Boosting:</span> XGBoost models were trained to predict at-risk schools based on various socioeconomic and resource indicators.
                    </li>
                    <li>
                      <span className="font-semibold">K-means Clustering:</span> Used to identify natural groupings of schools with similar characteristics and performance patterns.
                    </li>
                    <li>
                      <span className="font-semibold">Causal Inference:</span> Difference-in-differences analysis to evaluate the impact of specific intervention programs.
                    </li>
                  </ul>
                  <p>
                    Python libraries used: scikit-learn, XGBoost, statsmodels, causalimpact
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="evaluation">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-ds-primary mb-4">Model Evaluation & Validation</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Rigorous evaluation frameworks were used to ensure reliable and valid conclusions:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="font-semibold">Cross-Validation:</span> Used 5-fold cross-validation to assess model stability and generalizability.
                    </li>
                    <li>
                      <span className="font-semibold">Metric Selection:</span> Evaluated regression models using R², RMSE, and MAE; classification models using accuracy, precision, recall, and F1-score.
                    </li>
                    <li>
                      <span className="font-semibold">Feature Importance:</span> Analyzed feature importance scores to identify the most influential factors affecting educational outcomes.
                    </li>
                    <li>
                      <span className="font-semibold">Sensitivity Analysis:</span> Tested model robustness by varying input parameters and assessing the impact on predictions.
                    </li>
                    <li>
                      <span className="font-semibold">External Validation:</span> Validated findings against existing educational research and policy frameworks in South Africa.
                    </li>
                  </ul>
                  <p>
                    The final predictive model achieved an R² of 0.78 on the test set, indicating strong explanatory power.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Methodology;
