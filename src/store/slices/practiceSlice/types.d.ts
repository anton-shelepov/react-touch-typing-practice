export interface IPracticeState {
    text: string | undefined;
    loading: "idle" | "pending" | "succeeded" | "failed";
}
