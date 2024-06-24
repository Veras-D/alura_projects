import plotly.express as px
import pandas as pd
import flet as ft
from flet.plotly_chart import PlotlyChart

def main(page: ft.Page):

    df = pd.DataFrame([
        dict(Task="Job A", Start='2009-01-01', Finish='2009-02-28', Resource="Alex"),
        dict(Task="Job B", Start='2009-03-05', Finish='2009-04-15', Resource="Alex"),
        dict(Task="Job C", Start='2009-02-20', Finish='2009-05-30', Resource="Max")
    ])

    fig_df = px.timeline(df, x_start="Start", x_end="Finish", y="Task", color="Resource")
    fig_df.update_yaxes(autorange="reversed")
    fig_df.show()
    
    finance = pd.read_csv('/home/veras/Veras/scripts/Obsidian/Estudo/Geral/Organização/Finanças.csv')
    sprints = pd.read_csv('/home/veras/Veras/scripts/Obsidian/Estudo/Geral/Organização/exec.csv')
    fig = px.line(finance, x="TimeStamp", y="Value")
    fig2 = px.bar(sprints, x="TimeStamp", y="Value")

    page.add(PlotlyChart(fig, expand=True))
    page.add(PlotlyChart(fig2, expand=True))
    page.add(PlotlyChart(fig_df, expand=True))

ft.app(target=main)
