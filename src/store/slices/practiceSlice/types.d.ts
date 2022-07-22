export interface IPracticeState {
    text: string;
    loading: "idle" | "pending" | "succeeded" | "failed";
}
