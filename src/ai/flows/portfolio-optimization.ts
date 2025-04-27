'use server';
/**
 * @fileOverview An AI agent that analyzes a portfolio and suggests improvements based on a job description.
 *
 * - optimizePortfolio - A function that handles the portfolio optimization process.
 * - OptimizePortfolioInput - The input type for the optimizePortfolio function.
 * - OptimizePortfolioOutput - The return type for the optimizePortfolio function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const OptimizePortfolioInputSchema = z.object({
  portfolioContent: z
    .string()
    .describe('The content of the portfolio to be optimized.'),
  jobDescription: z
    .string()
    .describe('The job description to tailor the portfolio content to.'),
});
export type OptimizePortfolioInput = z.infer<typeof OptimizePortfolioInputSchema>;

const OptimizePortfolioOutputSchema = z.object({
  suggestions: z
    .string()
    .describe(
      'A list of suggestions on how to tailor the portfolio content to better match the job requirements.'
    ),
});
export type OptimizePortfolioOutput = z.infer<typeof OptimizePortfolioOutputSchema>;

export async function optimizePortfolio(input: OptimizePortfolioInput): Promise<OptimizePortfolioOutput> {
  return optimizePortfolioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizePortfolioPrompt',
  input: {
    schema: z.object({
      portfolioContent: z
        .string()
        .describe('The content of the portfolio to be optimized.'),
      jobDescription: z
        .string()
        .describe('The job description to tailor the portfolio content to.'),
    }),
  },
  output: {
    schema: z.object({
      suggestions: z
        .string()
        .describe(
          'A list of suggestions on how to tailor the portfolio content to better match the job requirements.'
        ),
    }),
  },
  prompt: `You are a career advisor specializing in portfolio optimization.

You will analyze the portfolio content and provide suggestions on how to tailor it to better match the job requirements.

Portfolio Content: {{{portfolioContent}}}
Job Description: {{{jobDescription}}}

Suggestions:`,
});

const optimizePortfolioFlow = ai.defineFlow<
  typeof OptimizePortfolioInputSchema,
  typeof OptimizePortfolioOutputSchema
>(
  {
    name: 'optimizePortfolioFlow',
    inputSchema: OptimizePortfolioInputSchema,
    outputSchema: OptimizePortfolioOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
